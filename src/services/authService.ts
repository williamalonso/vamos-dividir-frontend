import axios from 'axios';
import { NextRouter } from 'next/router';

/**
 * Função para checar se o refreshToken existe nos cookies
 * @param router - A função recebe um	objeto NextRouter para redirecionamento do usuário
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
