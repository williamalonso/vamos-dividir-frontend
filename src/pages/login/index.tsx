import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica de autenticação, por exemplo, chamando uma API
    // Vamos simular uma autenticação simples:
    if (email === 'user@example.com' && password === 'password') {
      router.push('/');
    } else {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px', padding: '2em', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div style={{ marginBottom: '1em' }}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.5em', marginBottom: '0.5em' }}
            required
          />
        </div>
        <div style={{ marginBottom: '1em' }}>
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.5em', marginBottom: '0.5em' }}
            required
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '0.5em', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
