import { NextApiRequest, NextApiResponse } from 'next';

// checa se o refreshToken existe nos cookies
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Não autenticado' });
  }

  return res.status(200).json({ message: 'Autenticado' });
}