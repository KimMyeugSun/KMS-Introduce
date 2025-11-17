import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CommonLayOut from './layout/CommonLayOut';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CommonLayOut />}></Route>
      </Routes>
    </>
  );
}

export default App;
