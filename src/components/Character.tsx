import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import { fetchCharacter } from '../utils/api';
import { ICharacter } from '@/types';
import { Loader, Img, Title } from '../styles';

const Character = () => {
  const { id } = useParams() as { id: string };
  const { isLoading, data } = useQuery<ICharacter>(['character', id], () =>
    fetchCharacter(Number(id as string))
  );

  return (
    <>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Container>
            <Img src={data?.imageUrl} alt={data?.name} />
            <Title>{data?.name}</Title>
            <Films>
              {data?.films.map((film: string, index: number) => <Film key={index}>{film}</Film>)}
            </Films>
            <Button href={data?.sourceUrl}>More</Button>
          </Container>
        </>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Films = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Film = styled.span`
  font-size: 20px;
  margin: 10px;
`;

const Button = styled.a`
  margin-top: 20px;
  background-color: ${(props) => props.theme.accentColor};
  padding: 12px;
  border-radius: 10px;
`;

export default Character;
