import { heroes } from '../data/heroes';

export const getHeroesById = (id) => {
  return heroes.find((element) => element.id === id);
};
