import React from 'react';
import { useState, useEffect } from 'react';

interface ICharacters {
  id: number;
  name: string;
  imageUrl: string;
}

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

  console.log(characters);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <div>Characters</div>
          {characters.map((character) => (
            <ul key={character.id}>
              <li>{character.name}</li>
              <img src={character.imageUrl} />
            </ul>
          ))}
        </>
      )}
    </>
  );
};

export default Characters;
