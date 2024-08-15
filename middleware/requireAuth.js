import { getSession } from 'next-auth/react';

const requireAuth = (handler) => async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  return handler(req, res);
};

export default requireAuth;
