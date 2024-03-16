import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch teams data from the backend API
    axios.get('/api/teams')
      .then(response => {
        setTeams(response.data);
      })
      .catch(error => {
        console.error('Error fetching teams data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {teams.map(team => (
          <li key={team.id}>
            {team.name}, {team.city}, {team.state}, {team.gender}, {team.theme}, {team.instagram}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
