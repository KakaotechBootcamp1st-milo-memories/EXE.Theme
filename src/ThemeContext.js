import React, { createContext, useState, useContext } from 'react';

// 테마 컨텍스트 생성
const ThemeContext = createContext();

// 사용자 정의 Provider 컴포넌트
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 커스텀 훅
export const useTheme = () => useContext(ThemeContext);