import React from 'react';
import { colors } from '../util/Color';
import { styled } from '@mui/material';

const Header = () => {
  const HeaderContainer = styled('header')(({}) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: `var(--header-height)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderBottom: colors.gray[500],
    zIndex: 999,
    userSelect: 'none',
  }));

  return (
    <>
      <HeaderContainer>헤더</HeaderContainer>
    </>
  );
};

export default Header;
