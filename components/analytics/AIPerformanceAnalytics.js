// /components/analytics/AIPerformanceAnalytics.js
import React, { useEffect, useState } from 'react';
import { fetchAIPerformanceData } from '../../utils/analytics';

const AIPerformanceAnalytics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchAIPerformanceData();
      setData(result);
    };
    getData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="ai-performance-analytics">
      <h1>AI Performance Analytics</h1>
      <div className="analytics-cards">
        <div className="card">
          <h2>AI Accuracy</h2>
          <p>{data.accuracy}%</p>
        </div>
        <div className="card">
          <h2>User Feedback</h2>
          <p>{data.userFeedback}</p>
        </div>
        <div className="card">
          <h2>Improvement Suggestions</h2>
          <p>{data.suggestions}</p>
        </div>
      </div>
    </div>
  );
};

export default AIPerformanceAnalytics;
