// pages/api/auth/renewToken/renewtokenService.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apiURL = process.env.NEXT_PUBLIC_API_URL;

    // Extrai o refreshToken dos cookies
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: 'Refresh token ausente' });
    }

    // Fazendo a requisição para renovar o accessToken usando o refreshToken
    const response = await axios.post(
      `${apiURL}/auth/renew`,
      { refreshToken }, // Enviando o refreshToken no corpo da requisição
    );
    
    // console.log(response.data);

    const newAccessToken = response.data.accessToken;

    // console.log('Novo token gerado:', newAccessToken);

    // Retorna o novo accessToken
    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    console.error('Erro ao renovar o token:', error);
    res.status(401).json({ message: 'Não foi possível renovar o token' });
  }
}
