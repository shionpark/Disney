import React from 'react';
import { Characters } from '@/components';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Title>Disney Characters</Title>
      <Characters />
    </>
  );
};

export const Title = styled.h1`
  font-size: 52px;
  text-align: center;
  color: ${(props) => props.theme.accentColor};
`;

export default Home;
