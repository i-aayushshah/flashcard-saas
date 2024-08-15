import { getSession } from 'next-auth/react';

const collaborationAccess = (handler) => async (req, res) => {
  const session = await getSession({ req });

  if (!session || !session.user.isCollaborator) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  return handler(req, res);
};

export default collaborationAccess;
