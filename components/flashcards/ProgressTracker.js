// /components/flashcards/ProgressTracker.js
import React from 'react';

const ProgressTracker = ({ total, completed }) => {
  const progressPercentage = (completed / total) * 100;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-700 font-semibold">Progress</span>
        <span className="text-gray-700 font-semibold">
          {completed} / {total}
        </span>
      </div>
      <div className="relative w-full h-4 bg-gray-200 rounded-full mt-2">
        <div
          className="absolute top-0 left-0 h-full bg-indigo-600 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressTracker;
