import React from 'react';

const HeartRateWidget = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2">Heart Rate</h3>
      <div className="text-4xl font-bold text-red-500">72 bpm</div>
      <div className="text-sm text-gray-500">Normal</div>
    </div>
  );
};

export default HeartRateWidget;
