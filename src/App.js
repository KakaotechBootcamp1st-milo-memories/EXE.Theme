import React, { useState } from 'react';
import { useTheme } from './ThemeContext';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [date] = useState(() => {
    const now = new Date();
    const options = { 
      year: 'numeric', month: 'long', day: 'numeric', 
      hour: 'numeric', minute: 'numeric', 
      hour12: true 
    };
    return now.toLocaleDateString('ko-KR', options);
  });

  const handleNameSubmit = () => {
    setDisplayName(name);
  };

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={appStyle}>
      <div>
        <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleNameSubmit}>확인</button>
      </div>
      <div>
        <h2>Hello, {displayName}</h2>
        <p>Today's date is {date}</p>
      </div>
    </div>
  );
};

export default App;