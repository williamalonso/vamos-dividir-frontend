import Image from 'next/image';
// import styles from '@/styles/login.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className={`w-screen h-screen flex justify-center items-center`}>
      <div className={`w-[50vw] h-full overflow-hidden flex items-center justify-center`}>
        <Image 
          className='h-auto object-contain'
          src="/login/bg-login.jpg"
          alt="Imagem de fundo"
          width={4000}
          height={6000}
          priority 
        />
      </div>
      <div className={`w-[50vw] h-full flex items-center justify-center`}>
        <div className="text-center w-full max-w-[382px]">
          <h2 className="text-3xl font-bold mb-4 text-left">Acesse sua conta</h2>
          <div className="mb-4 w-full text-left">
            <label htmlFor="email" className="block mb-1">Email</label>
            <FormControl sx={{ width: '100%', height: '50px' }} variant="filled">
              <FilledInput
                id="filled-adornment-email"
                type="email"
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
            <label htmlFor="password" className="block mb-1">Senha</label>
            <FormControl sx={{ width: '100%', height: '50px' }} variant="filled">
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
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
            <p className="text-xs text-gray-500 mt-1">Possui 8 caracteres ou mais</p>
          </div>
          <button className="bg-customGreen w-full text-white px-4 py-2 hover:bg-blue-600 transition duration-300 h-[56px] rounded-[64px]">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;