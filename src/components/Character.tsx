import React from 'react';
import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface RouteParams {
  [key: string]: string;
}

interface RouteState {
  name: string | undefined;
}

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.h1`
  font-size: 32px;
  text-align: center;
  color: ${(props) => props.theme.accentColor};
`;

const Character = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  return (
    <>
      <Title>{state ? state : <Loader />}</Title>
    </>
  );
};

export default Character;
