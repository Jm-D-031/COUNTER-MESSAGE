import React, { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  return (
    <div className="App" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>COUNTER MESSAGE</h1>

      <div style={{ fontSize: '2.5rem', margin: '1rem 0' }}>{count}</div>

      <div>
        <button onClick={() => setCount(c => c + 1)} style={{ marginLeft: 8, fontWeight: 'bold' }}>+</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: 8, fontWeight: 'bold' }}>Reset</button>
        <button onClick={() => setCount(c => c - 1)} style={{ marginLeft: 8, fontWeight: 'bold' }}>-</button>
      </div>

      <div style={{ marginTop: 24 }}>
        <input
          type="text"
          placeholder="ANO ANG IYONG MENSAHE"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: '6px 8px', width: '60%' }}
        />
        <div style={{ marginTop: 10, fontWeight: 'bold' }}>Live message: {message}</div>
      </div>

      {count >= 5 && (
        <div style={{ marginTop: 20, color: 'green', fontWeight: 'bold', fontSize: 36 }}>The Goal Reached!</div>
      )}
    </div>
  );
}

export default App;