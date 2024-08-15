// /pages/collaboration/team.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import { Button, Input } from '../../components/ui';

const TeamManagement = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newMember, setNewMember] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('/api/teamManagement');
        setTeams(response.data);
      } catch (err) {
        setError('Failed to load team data');
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const handleAddMember = async () => {
    if (!newMember) return;

    try {
      await axios.post('/api/teamManagement', { member: newMember });
      setTeams([...teams, newMember]);
      setNewMember('');
    } catch (err) {
      setError('Failed to add team member');
    }
  };

  const handleRemoveMember = async (member) => {
    try {
      await axios.delete(`/api/teamManagement/${member}`);
      setTeams(teams.filter((m) => m !== member));
    } catch (err) {
      setError('Failed to remove team member');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1>Team Management</h1>
        <div>
          <Input
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
            placeholder="Enter new team member"
          />
          <Button onClick={handleAddMember}>Add Member</Button>
        </div>
        <ul>
          {teams.map((member) => (
            <li key={member}>
              {member}
              <Button onClick={() => handleRemoveMember(member)} style={{ marginLeft: '10px' }}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default TeamManagement;
