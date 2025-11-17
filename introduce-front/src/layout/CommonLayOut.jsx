import Header from '../components/Header';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import React from 'react';
import MainPage from '../pages/MainPage';
import { styled } from '@mui/material';

const MainLayout = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 'var(--header-height)';
  min-height: 'calc(100vh - var(--header-height))';
`;

const CommonLayOut = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Aside />
        <MainPage />
      </MainLayout>
      <Footer />
    </>
  );
};

export default CommonLayOut;
