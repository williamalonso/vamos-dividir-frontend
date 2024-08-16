import axios from 'axios';
import { DemandData } from '@/interfaces/demandServiceInterface';

const API_URL = 'https://vamos-dividir-backend.vercel.app/api/demand/create';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjUzYzdiNTQ2MWRkNWZmZjA5MDcxYjkiLCJlbWFpbCI6IndpbGxpYW0tdGVzdGVfdmVyY2VsQF9vdXRsb29rLmNvbSIsImlhdCI6MTcyMzc2OTUzNCwiZXhwIjoxNzIzODU1OTM0fQ.SMiJYK_RQLZUGClaIPfE9n2T2kJmnQ0tdzdY2H8S8kY';

// Função para criar uma nova demanda
export const createDemand = async (data: DemandData) => {
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