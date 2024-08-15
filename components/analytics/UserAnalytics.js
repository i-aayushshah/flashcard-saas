// /components/analytics/UserAnalytics.js
import React, { useEffect, useState } from 'react';
import { fetchUserAnalytics } from '../../utils/analytics';

const UserAnalytics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchUserAnalytics();
      setData(result);
    };
    getData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="user-analytics">
      <h1>User Analytics Dashboard</h1>
      <div className="analytics-cards">
        <div className="card">
          <h2>Total Users</h2>
          <p>{data.totalUsers}</p>
        </div>
        <div className="card">
          <h2>Active Users</h2>
          <p>{data.activeUsers}</p>
        </div>
        <div className="card">
          <h2>New Sign-ups</h2>
          <p>{data.newSignUps}</p>
        </div>
      </div>
    </div>
  );
};

export default UserAnalytics;
