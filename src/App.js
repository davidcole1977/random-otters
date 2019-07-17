import React from 'react';
import otters from './otterImageList.json';

function App() {
  const otterIndex = Math.floor(Math.random() * otters.length);
  const otterImageUrl = otters[otterIndex];

  return (
    <div style={{backgroundColor: '#000000'}}>
      <img src={`/random-otters/otters/${otterImageUrl}`} alt="awesome random otter innit" style={{maxWidth: '100vw', maxHeight: '100vh', display: 'block', margin: 'auto'}} />
    </div>
  );
}

export default App;
