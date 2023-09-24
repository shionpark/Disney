import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface RouteParams {
  [key: string]: string;
}

interface RouteState {
  name: string;
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

interface ICharacter {
  id: number;
  films: string;
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

const Character = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<ICharacter[]>([]);

  const { id } = useParams<RouteParams>();
  const location = useLocation();
  const state = (location.state as { name?: string }) || {};

  console.log(state);

  const getData = async () => {
    const data = await (
      await fetch(`https://disney_api.nomadcoders.workers.dev/characters/${id}`)
    ).json();
    setCharacter(data);
    setLoading(false);
  };

  console.log(character);

  useEffect(() => {
    getData();
  }, []);

  return <>{loading ? <Loader /> : <Title>{state ? state.name : <Loader />}</Title>}</>;
};

export default Character;
