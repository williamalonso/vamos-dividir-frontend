import axios from 'axios';
import { DemandData } from '@/interfaces/demandService';

const API_URL = 'https://vamos-dividir-backend.vercel.app/api/demand/create';

// Função para criar uma nova demanda
export const createDemand = async (data: DemandData) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error creating demand:', error);
    throw error;
  }
};