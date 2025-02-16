import { useState } from 'react';
import { useAuthStore } from '../store/auth.ts';
import { useNavigate } from 'react-router-dom';
import { Button, TextInput, Container, Alert } from '@mantine/core';
import '../styles.css';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username === 'admin' && password === 'password') {
      login();
      navigate('/resources', { replace: true });
    } else {
      setError('Invalid credentials');
    }
  };

  return (
<Container className="center-container fade-in">
  <div className="card">
    <h2>Welcome</h2>
    <TextInput className="text-input" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
    <TextInput className="text-input" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    {error && <Alert className="error-message">{error}</Alert>}
    <Button className="primary-button" onClick={handleSubmit}>Enter the Jedi Temple</Button>
  </div>
</Container>

  );
}
