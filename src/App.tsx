import React from 'react';
import './App.css';
import Main from './components/main';
import { NewsContext} from './context/newsDatacontext';
import { useNewsContextValue } from './hooks/helper';



function App() {
  const newsContextValue = useNewsContextValue()
  return (
    <NewsContext.Provider value={newsContextValue}>
    <Main/>
    </NewsContext.Provider>
  );
}

export default App;
