// pages/api/tableService.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    // Acessando as variáveis de ambiente
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const authToken = process.env.API_AUTH_TOKEN;

    if(!apiURL) {
      throw new Error('URL da Api não está definida nas variáveis de ambiente');
    }

    const endpointURL = `${apiURL}/demand/getall`;

    // Fazendo a requisição à API externa com o token de autenticação
    const response = await axios.get(endpointURL, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    
    const data = response.data;

    // Retorne os dados como resposta da API Next.js
    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao buscar dados da API externa:', error);
    res.status(500).json({ message: 'Erro ao buscar dados' });
  }
}
