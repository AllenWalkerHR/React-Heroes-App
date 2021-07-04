import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  // const heroes = getHeroesByPublisher(publisher);
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div>
      <h1>Hero List</h1>
      <div
        className='uk-grid-match uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-margin-small animate__animated animate__fadeIn'
        uk-grid=''>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero}></HeroCard>
        ))}
      </div>
    </div>
  );
};
