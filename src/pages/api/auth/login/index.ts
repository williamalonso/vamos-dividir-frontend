//pages->api->login->index.tsx

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {

    const { email, password } = req.body;

    const apiURL = process.env.NEXT_PUBLIC_API_URL;

    try {
      // Faz a requisição para o endpoint externo
      const response = await axios.post(
        `${apiURL}/user/login`,
        { email,password },
        { 
          withCredentials: true, // Permitir envio de cookies na requisição
          headers: {
            'Content-Type': 'application/json',
          },
        } 
      );

      // Transferir cookies para o cliente
      const setCookie = response.headers['set-cookie'];
      
      if (setCookie) {
        res.setHeader('Set-Cookie', setCookie); // Armazenar o cookie
      }

      // Retorna a resposta ao frontend
      res.status(200).json(response.data);
    } catch (error) {
      // Se houver um erro, retorna o erro ao frontend
      console.error('Erro ao fazer login:', error);
      res.status(500).json({ message: 'Erro ao fazer login' });
    }
  } else {
    // Responde com 405 Method Not Allowed se o método não for POST
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}