// /components/collaboration/TeamManagement.js
import React, { useEffect, useState } from 'react';
import { fetchTeamMembers, updateTeamMemberRole } from '../../utils/collaboration';

const TeamManagement = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const getTeam = async () => {
      const result = await fetchTeamMembers();
      setTeam(result);
    };
    getTeam();
  }, []);

  const handleRoleChange = async (memberId, newRole) => {
    await updateTeamMemberRole(memberId, newRole);
    setTeam(team.map(member =>
      member.id === memberId ? { ...member, role: newRole } : member
    ));
  };

  return (
    <div className="team-management">
      <h1>Team Management</h1>
      <ul>
        {team.map(member => (
          <li key={member.id}>
            <p>{member.name}</p>
            <select
              value={member.role}
              onChange={(e) => handleRoleChange(member.id, e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamManagement;
