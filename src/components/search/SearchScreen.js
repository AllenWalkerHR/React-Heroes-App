import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../custoHooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [{ search }, handleInputChange] = useForm({ search: q });

  const horoesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
    console.log(search);
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <div uk-grid=''>
        <div className='uk-width-2-5@s'>
          <h4>Search Form</h4>
          <form onSubmit={handleSubmit}>
            <input
              className='uk-input uk-form-blank'
              placeholder='Find your hero'
              name='search'
              autoComplete='off'
              value={search}
              onChange={handleInputChange}
              type='text'
            />
            <button className='uk-button uk-button-primary' type='submit'>
              Search
            </button>
          </form>
        </div>
        <div className='uk-width-3-5@s'>
          <h4>Results</h4>

          {q === '' && (
            <div className='uk-alert-primary' uk-alert=''>
              <a href='#!' className='uk-alert-close' uk-close=''>
                {''}
              </a>
              <p>{`Search a hero`}</p>
            </div>
          )}

          {q !== '' && horoesFiltered.length === 0 && (
            <div className='uk-alert-danger' uk-alert=''>
              <a href='#!' className='uk-alert-close' uk-close=''>
                {''}
              </a>
              <p>{`there is no a heroe with "${q}"`}</p>
            </div>
          )}

          {horoesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
