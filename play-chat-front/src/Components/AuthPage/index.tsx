import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './styles.scss'

const socket = io('http://localhost:3000');

interface User {
  name: string;
  email: string;
}

interface Message {
  user: User;
  content: string;
}


const index = () => {

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isJoined, setIsJoined] = useState(false);
  
    useEffect(() => {
      console.log('Client connected to WebSocket');
  
      const handleIncomingMessage = (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      };
  
      const handleUserJoined = (userName: string) => {
        setMessages((prevMessages) => [...prevMessages, { user: { name: 'Play Chat', email: '' }, content: `${userName} entrou no chat.` }]);
      };
  
      socket.on('message', handleIncomingMessage);
      socket.on('userJoined', handleUserJoined);
  
      return () => {
        socket.off('message', handleIncomingMessage);
        socket.off('userJoined', handleUserJoined);
      };
    }, []);
  
    const handleJoin = () => {
      if (name.trim() !== '' && email.trim() !== '') {
        socket.emit('join', { name, email });
        setIsJoined(true);
      }
    };
  
    const sendMessage = () => {
      if (input.trim() !== '') {
        console.log('Sending message:', input); 
        socket.emit('message', input);
        setInput('');
      }
    };
  return (
    <main>
      {!isJoined ? (
        <form className='authInputsContainer'>
          <h1>Preencha os dados para entrar no chat</h1>  
          <input placeholder='Nome...' type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
          <input name='email' type="email" placeholder='E-mail...' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <button onClick={handleJoin}>Entrar no Chat</button>
        </form>
      ) : (
        <div>
          <div>
            {messages.map((message, index) => (
              <div key={index}>
                {message.user.name}: {message.content}
              </div>
            ))}
          </div>
          <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </main>
  )
}

export default index