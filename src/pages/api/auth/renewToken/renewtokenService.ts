// pages/api/auth/renewToken/renewtokenService.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apiURL = process.env.NEXT_PUBLIC_API_URL;

    // Extrai o refreshToken do cookie
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: 'Refresh token ausente' });
    }

    // Fazendo a requisição para renovar o accessToken usando o cookie httpOnly
    const response = await axios.post(
      `${apiURL}/auth/renew`,
      {}, // Corpo vazio, pois o refreshToken será enviado no cookie
      {
        withCredentials: true, // Permite enviar cookies junto à requisição
      }
    );

    const newAccessToken = response.data.accessToken;

    // Retorna o novo accessToken
    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    console.error('Erro ao renovar o token:', error);
    res.status(401).json({ message: 'Não foi possível renovar o token' });
  }
}
