import axios from 'axios';

/**
 * Verifica se o accessToken existe no localStorage. 
 * Se não existir, tenta renovar o token através de uma serverless function.
 * @returns O novo accessToken ou null se a renovação falhar.
 */
export const checkAccessToken = async (): Promise<string | null> => {

  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    return accessToken;
  }

  console.warn('accessToken não encontrado. Tentando renovar...');

  try {
    const response = await axios.get('/api/auth/renewToken/renewtokenService', {
      withCredentials: true, // Inclui cookies na requisição
    });

    const newAccessToken = response.data.accessToken;
    localStorage.setItem('accessToken', newAccessToken);

    // console.log('Token renovado com sucesso:', newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error('Erro ao renovar o token:', error);
    return null;
  }
};