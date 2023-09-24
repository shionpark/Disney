import React from 'react';
import { Characters } from '@/components';
<<<<<<< HEAD
import { Title } from '../styles';
=======
import styled from 'styled-components';
>>>>>>> 04880e9062dad306f22395e83b40b1590c6cf2bd

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
