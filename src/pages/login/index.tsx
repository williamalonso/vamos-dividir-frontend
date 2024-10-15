import Image from 'next/image';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { jwtDecode } from 'jwt-decode';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault(); // Evita o comportamento padrão do formulário
    // Resetar mensagens de erro
    setError(null);

    // Verifica se os campos estão preenchidos
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    
    try {

      const response = await axios.post('/api/auth/login', { email, password }, { withCredentials: true });
      
      const { accessToken  } = response.data;

      if (response.status === 200 && accessToken) {

        // Armazena o accessToken no localStorage
        localStorage.setItem('accessToken', accessToken);

        // Redireciona para a página inicial
        router.push('/home');

      } else {
        console.error('A propriedade exp não está definida no token decodificado.')
      }

      } catch (e) {

      console.error('Erro ao realizar login: ', e);

    }
  };

  return (
    <div className={`w-screen h-screen flex justify-center items-center`}>
      <div className={`w-[50vw] h-full overflow-hidden lg:flex items-center justify-center hidden`}>
        <Image 
          // className="h-auto object-contain w-full"
          layout="responsive"
          src="/login/bg-login.jpg"
          alt="Imagem de duas mãos em cima de um notebook aberto sobre uma mesa com um celular e uma xícara de café ao lado"
          width={400}
          height={600}
          priority
        />
      </div>
      <div className={`w-full h-full flex items-center justify-center lg:w-[50vw] px-[24px] lg:px-0`}>
        <form onSubmit={handleSubmit} className="text-center w-full max-w-[382px]">
          <h2 className="text-3xl font-bold mb-4 text-left">Acesse sua conta</h2>
          <div className="mb-4 w-full text-left">
            <label htmlFor="filled-adornment-email" className="block mb-1">Email</label>
            <FormControl sx={{ width: '100%', height: '50px' }} variant="filled">
              <FilledInput
                id="filled-adornment-email"
                type="text"
                value={email}
                autoComplete="username"
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: 'white',
                  height: '100%',
                  '&:focus': {
                    backgroundColor: 'white',
                  },
                  '&:hover': {
                    backgroundColor: 'white',
                  },
                  '&.Mui-focused': {
                    backgroundColor: 'white',
                  },
                  '&.Mui-focused::before': {
                    borderBottomColor: '#24A78A',
                  },
                  '&.Mui-focused::after': {
                    borderBottomColor: '#24A78A',
                  },
                  '&.MuiFilledInput-root::after': {
                    borderBottomColor: '#24A78A',
                  },
                  '& .MuiFilledInput-input': {
                    paddingTop: '12px',
                    fontSize: '20px',
                  },
                }}
              />
            </FormControl>
          </div>
          <div className="mb-4 w-full text-left">
            <label htmlFor="filled-adornment-password" className="block mb-1">Senha</label>
            <FormControl sx={{ width: '100%', height: '50px' }} variant="filled">
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  backgroundColor: 'white',
                  height: '100%',
                  '&:focus': {
                    backgroundColor: 'white',
                  },
                  '&:hover': {
                    backgroundColor: 'white',
                  },
                  '&.Mui-focused': {
                    backgroundColor: 'white',
                  },
                  '&.Mui-focused::before': {
                    borderBottomColor: '#24A78A',
                  },
                  '&.Mui-focused::after': {
                    borderBottomColor: '#24A78A',
                  },
                  '&.MuiFilledInput-root::after': {
                    borderBottomColor: '#24A78A',
                  },
                  '& .MuiFilledInput-input': {
                    paddingTop: '12px',
                    fontSize: '20px',
                  },
                }}
              />
            </FormControl>
            <p className="text-xs text-gray-500 mt-1 font-medium">Possui 8 caracteres ou mais</p>
          </div>
          { error && <p className="text-red-500 text-sm mb-4">{error}</p> }
          <button type="submit" className="bg-customGreen w-full text-white px-4 py-2 hover:bg-[#1E8A74] transition duration-300 h-[56px] rounded-[64px]">
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;