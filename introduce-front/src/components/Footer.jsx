import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../util/Color';
const Footer = () => {
  const FooterContainer = styled('footer')(({}) => ({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: `var(--footer-height)`,
    backgroundColor: colors.white,
    borderTop: colors.gray[500],
    zIndex: 999,
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': {
      fontSize: '15px',
      color: colors.gray[500],
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }));
  return (
    <>
      <FooterContainer>
        <a href="https://github.com/KimMyeugSun/KMS-Introduce">
          © 2025 KMS. github link
        </a>
      </FooterContainer>
    </>
  );
};

export default Footer;
