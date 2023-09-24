export const BASE_URL = 'https://disney_api.nomadcoders.workers.dev';

export function fetchCharacters() {
  return fetch(`${BASE_URL}/characters`).then((res) => res.json());
}

export function fetchCharacter(id: number | string) {
  return fetch(`${BASE_URL}/characters/${String(id)}`).then((res) => res.json());
}
