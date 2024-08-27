// pages/api/detailDemand/detailService.ts

import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const authToken = req.body.token;
    const demandId = req.body.demandId;

    if(!apiURL) {
      throw new Error('URL da Api não está definida nas variáveis de ambiente');
    }

    if(!authToken) {
      return res.status(401).json({ message: 'Token de autenticação não fornecido' });
    }

    if(!demandId) {
      return res.status(401).json({ message: 'Id da demanda não fornecido' });
    }

    const endpointURL = `${apiURL}/demand/demandID/${demandId}`;

    // Fazendo a requisição à API externa com o token de autenticação
    const response = await axios.get(endpointURL, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    
    const data = response.data;

    // Retorne os dados como resposta da API Next.js
    res.status(200).json(data);

  } catch(error) {
    console.error('Erro ao buscar dados da API externa:', error);
    res.status(500).json({ message: 'Erro ao buscar detalhes da demanda' });
  }
}