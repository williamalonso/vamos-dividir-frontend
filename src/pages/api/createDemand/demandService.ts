//pages/api/createDemand/demandService.ts
import axios from 'axios';
import { TableData } from '@/interfaces/TableData';

const API_URL = 'https://vamos-dividir-backend.vercel.app/api/demand/create';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjUzYzdiNTQ2MWRkNWZmZjA5MDcxYjkiLCJlbWFpbCI6IndpbGxpYW0tdGVzdGVfdmVyY2VsQF9vdXRsb29rLmNvbSIsImlhdCI6MTcyMzc3NDUxNiwiZXhwIjoxNzIzODYwOTE2fQ.osoliFNFrAKr1JLJIW0CDMstBGwxkytuEcFzMSWLPoM';

// Função para criar uma nova demanda
export const createDemand = async (data: TableData) => {
  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating demand:', error);
    throw error;
  }
};