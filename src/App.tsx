import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Navbar from './cmps/layout/Navbar';
import Sidebar from './cmps/layout/Sidebar';
import GlobalStyle from './theme/globalStyles';
import MovieApp from './views/MovieApp';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <Navbar />
      <AppLayout>
        <Sidebar />
        <MovieApp />
      </AppLayout>
    </div>
  );
}

export default App;

const AppLayout = styled.div`
  height: calc(100vh - 65px);
  display: flex;
`;
