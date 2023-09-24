import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { fetchCharacter } from '../utils/api';
import { IParams, ICharacter } from '@/types';
import { Loader } from '../styles';

const Character = () => {
  const { id } = useParams<IParams>();
  const { isLoading, data } = useQuery<ICharacter>(['character', id], () =>
    fetchCharacter(Number(id))
  );

  return (
    <>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <h1>{data?.name}</h1>
          <div>
            <img src={data?.imageUrl} alt={data?.name} />
            <h2>{data?.name}</h2>
            <p>Films: {data?.films}</p>
          </div>
        </>
      )}
    </>
  );
};

export default Character;
