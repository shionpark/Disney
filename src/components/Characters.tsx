import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { fetchCharacters } from '@/utils/api';
import { ICharacters } from '@/types';
import { Loader, Container, CharacterItem, Img, SubTitle } from './Characters.styles';

const Characters = () => {
  const { isLoading, data: characters } = useQuery<ICharacters[]>(['characters'], fetchCharacters);
  return (
    <>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Container>
            {characters?.slice(0, 100).map((character) => (
              <Link to={`/characters/${character.id}`} state={{ name: character.name }}>
                <CharacterItem key={character.id}>
                  <Img src={character.imageUrl || '/images/default.png'} alt={character.name} />
                  <SubTitle>{character.name}</SubTitle>
                </CharacterItem>
              </Link>
            ))}
          </Container>
        </>
      )}
    </>
  );
};

export default Characters;
