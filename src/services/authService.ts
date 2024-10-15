import axios from 'axios';
import { NextRouter } from 'next/router';

/**
 * Função para checar se o refreshToken existe nos cookies
 * Verifica se o usuário está autenticado.
 * @param router - O objeto NextRouter para redirecionamento.
 */
export const checkAuth = async (router: NextRouter) => {
  try {
    await axios.get(
      '/api/auth/checkRefreshToken/checkRefreshTokenService',
      { withCredentials: true }
    );
  } catch (error) {
    console.error('Erro na autenticação:', error);
    router.push('/login'); // Redireciona para a página de login.
  }
};
