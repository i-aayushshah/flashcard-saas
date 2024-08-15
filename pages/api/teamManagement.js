// /pages/api/teamManagement.js
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

const db = admin.firestore();

export default async (req, res) => {
  const { teamId } = req.body;

  try {
    const teamSnapshot = await db.collection('teams').doc(teamId).get();
    if (!teamSnapshot.exists) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.status(200).json(teamSnapshot.data());
  } catch (error) {
    console.error('Error managing team:', error);
    res.status(500).json({ error: 'Failed to manage team' });
  }
};
