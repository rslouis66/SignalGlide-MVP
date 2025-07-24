import React from 'react';
import './SignalCard.css';

const SignalCard = () => {
  return (
    <div className="signal-card">
      <h2>$ES</h2>
      <p><strong>Direction:</strong> 🟢 Bullish</p>
      <p><strong>Confidence:</strong> 82%</p>
      <p><strong>Signal Time:</strong> July 24, 2025 • 2:45 PM ET</p>
    </div>
  );
};

export default SignalCard;
