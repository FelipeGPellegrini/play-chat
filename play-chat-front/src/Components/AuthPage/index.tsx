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
  const [password, setPassword] = useState('')
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
          <input placeholder='Nome de usuário...' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder='E-mail...' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder='Senha...' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button onClick={handleJoin}>Entrar no Chat</button>
        </form>
      ) : (
        <div className='chatContainer'>
          <div className='messageContainer'>
            {messages.map((message, index) => (
              <div key={index} className='message'>
                <h3>{message.user.name}</h3> <p>{message.content}</p>
              </div>
            ))}
          </div>
          <div className='inputContainer'>
            <input placeholder='Digite sua mensagem...' type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyUp={(e) => {
              if (e.key === 'Enter') {
                sendMessage();
              }
            }}/>
            <button type='button' onClick={sendMessage} >Enviar</button>
          </div>
        </div>
      )}
    </main>
  )
}

export default index