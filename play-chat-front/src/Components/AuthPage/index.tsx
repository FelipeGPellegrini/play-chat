import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './styles.scss';

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
  const [password, setPassword] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Client connected to WebSocket');

    const handleIncomingMessage = (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    const handleUserJoined = (userName: string) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: { name: 'Play Chat', email: '' }, content: `${userName} entrou no chat.` },
      ]);
    };

    const handleJoinError = (errorMessage: string) => {
      setError(errorMessage);
    };

    socket.on('message', handleIncomingMessage);
    socket.on('userJoined', handleUserJoined);
    socket.on('joinError', handleJoinError);

    const handleAuthenticationSuccess = () => {
      setIsJoined(true);
    };

    socket.on('authenticationSuccess', handleAuthenticationSuccess);

    return () => {
      socket.off('message', handleIncomingMessage);
      socket.off('userJoined', handleUserJoined);
      socket.off('joinError', handleJoinError);
      socket.off('authenticationSuccess', handleAuthenticationSuccess);
    };
    
  }, []);

  const handleJoin = async (event: React.FormEvent) => {
    console.log("HandleJoin executado!!")
    event.preventDefault();
    setError(null);

    if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      socket.emit('join', { name, email, password }, (response: { error: string } | null) => {
        if (response && response.error) {
          setError(response.error);
        } else {
          setIsJoined(true);
        }
      });
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
        <form className="authInputsContainer" onSubmit={handleJoin}>
          <h1>Preencha os dados para entrar no chat</h1>
          <input placeholder="Nome de usuário..." type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="E-mail..." value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Senha..." value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Entrar no Chat</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      ) : (
        <div className="chatContainer">
          <div className="messageContainer">
            {messages.map((message, index) => (
              <div key={index} className="message">
                <h3>{message.user.name}</h3> <p>{message.content}</p>
              </div>
            ))}
          </div>
          <div className="inputContainer">
            <input
              placeholder="Digite sua mensagem..."
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              }}
            />
            <button type="button" onClick={sendMessage}>
              Enviar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default index;
