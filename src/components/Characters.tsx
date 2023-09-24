import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

interface ICharacters {
  id: number;
  name: string;
  imageUrl: string;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

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

const Characters = () => {
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch('https://disney_api.nomadcoders.workers.dev/characters');
    const json = await response.json();
    setCharacters(json.slice(0, 100));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Title>Characters</Title>
          <Container>
            {characters.map((character) => (
              <ul key={character.id}>
                <li>{character.name}</li>
                <img src={character.imageUrl} />
              </ul>
            ))}
          </Container>
        </>
      )}
    </>
  );
};

export default Characters;
