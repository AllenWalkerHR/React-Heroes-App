import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({ history }) => {
  const { heroeID } = useParams();

  const hero = useMemo(() => getHeroesById(heroeID), [heroeID]);

  if (!hero) {
    return <Redirect to='/' />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  // console.log(heroImages(`./${id}.jpg`));
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  return (
    <div uk-grid=''>
      <div className='uk-width-2-5@s'>
        {/* <img src={`/assets/heroes/${id}.jpg`} /> */}
        <img
          src={heroImages(`./${id}.jpg`).default}
          alt={superhero}
          className='animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='uk-width-3-5@s animate__animated animate__fadeIn'>
        <h3>{superhero}</h3>
        <ul>
          <li>
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li>
            <b>Publisher: </b>
            {publisher}
          </li>
          <li>
            <b>First appearence: </b>
            {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>
          {characters.split(',').map((character) => (
            <span
              key={character}
              className='uk-badge uk-margin-small-right uk-margin-small-bottom uk-padding-small'>
              {character}
            </span>
          ))}
        </p>
        <button
          onClick={handleReturn}
          className='uk-button uk-button-default uk-width-1-1 uk-width-1-2@s uk-align-right'>
          Return
        </button>
      </div>
    </div>
  );
};
