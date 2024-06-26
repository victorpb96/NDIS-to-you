import React from 'react';

import SpinningWheel from '../components/SpinningWheel';

const App: React.FC = () => {
  return (
    <>
      <div className="my-5 flex justify-center">
        <div className="">
          <p className="font-sans text-2xl text-blue-900">DASHBOARD</p>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="App">
          <SpinningWheel />
        </div>
      </div>
    </>
  );
};

export default App;
