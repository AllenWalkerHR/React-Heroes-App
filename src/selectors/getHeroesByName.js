import { heroes } from '../data/heroes';

export const getHeroesByName = (search = '') => {
  if (search === '') return [];

  return heroes.filter((heroe) =>
    heroe.superhero.toLowerCase().includes(search.toLowerCase())
  );
};
