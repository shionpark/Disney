import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { fetchCharacter } from '../utils/api';
import { ICharacter } from '@/types';
import { Loader, Img, Title } from '../styles';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.a`
  background-color: ${(props) => props.theme.accentColor};
`;

const Character = () => {
  const { id } = useParams() as { id: string };
  const { isLoading, data } = useQuery<ICharacter>(['character', id], () =>
    fetchCharacter(Number(id))
  );
  console.log(id);

  return (
    <>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Container>
            <Img src={data?.imageUrl} alt={data?.name} />
            <Title>{data?.name}</Title>
            <p>Films: {data?.films}</p>
            <Button href={data?.sourceUrl}>More</Button>
          </Container>
        </>
      )}
    </>
  );
};

export default Character;
