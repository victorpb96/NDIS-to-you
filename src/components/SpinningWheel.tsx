// src/components/SpinningWheel.tsx
import React, { useState } from 'react';

const SpinningWheel: React.FC = () => {
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    if (!spinning) {
      setSpinning(true);
      setTimeout(() => setSpinning(false), 3000); // Adjust spin duration
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className={`wheel ${spinning ? 'spin' : ''}`} />
      <button
        onClick={handleSpin}
        className="mt-5 rounded-lg bg-blue-500 px-6 py-3 font-bold text-white shadow-md transition duration-300 hover:bg-blue-600"
      >
        Spin the Wheel
      </button>
    </div>
  );
};

export default SpinningWheel;
