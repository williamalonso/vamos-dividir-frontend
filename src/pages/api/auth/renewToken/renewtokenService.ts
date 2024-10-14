// pages/api/auth/renewToken/renewtokenService.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apiURL = process.env.NEXT_PUBLIC_API_URL;

    // Extrai o refreshToken dos cookies
    const { cookies } = req;
    const refreshToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjUzYzdiNTQ2MWRkNWZmZjA5MDcxYjkiLCJlbWFpbCI6IndpbGxpYW0tdGVzdGVfdmVyY2VsQF9vdXRsb29rLmNvbSIsImlhdCI6MTcyODkzODkxNCwiZXhwIjoxNzI5NTQzNzE0fQ.Tcqbb0LzOVYLKVeEPpJRoVCpY2Ab48z_us6kD_Nh-0M`; // Certifique-se de que o nome do cookie esteja correto

    // Fazendo a requisição para renovar o accessToken usando o refreshToken
    const response = await axios.post(
      `${apiURL}/auth/renew`,
      { refreshToken }, // Enviando o refreshToken no corpo da requisição
      {
        withCredentials: true,
      }
    );
    
    console.log(response.data);

    const newAccessToken = response.data.accessToken;

    // Retorna o novo accessToken
    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    console.error('Erro ao renovar o token:', error);
    res.status(401).json({ message: 'Não foi possível renovar o token' });
  }
}
