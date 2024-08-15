// /pages/analytics/dashboard.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

const Dashboard = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get('/api/userAnalytics');
        setAnalyticsData(response.data);
      } catch (err) {
        setError('Failed to load analytics data');
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1>User Analytics Dashboard</h1>
        {/* Render analytics data here */}
        <pre>{JSON.stringify(analyticsData, null, 2)}</pre>
      </div>
    </Layout>
  );
};

export default Dashboard;
