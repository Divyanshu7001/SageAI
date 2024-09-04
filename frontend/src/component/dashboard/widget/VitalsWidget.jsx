import React from 'react';

const VitalsWidget = (props) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className={`text-xl font-semibold mb-2 ${props.className}`}>{props.title}</h3>
      <div className="text-4xl font-bold text-blue-500">{props.current_value}</div>
      <div className="text-sm text-gray-500">{props.status}</div>
    </div>
  );
};

export default VitalsWidget;
