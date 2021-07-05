import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  //   return <div>{superhero}</div>;
  return (
    <div>
      <div
        className='uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin'
        uk-grid=''>
        <div className='uk-card-media-left uk-cover-container'>
          <img
            src={heroImages(`./${id}.jpg`).default}
            alt={superhero}
            uk-cover=''
          />
          <canvas width='500' height='800'></canvas>
        </div>
        <div>
          <div className='uk-card-body uk-margin-small'>
            <h6 className='uk-card-title'>{superhero}</h6>
            <p>{alter_ego}</p>
            {alter_ego !== characters && <p>{characters}</p>}{' '}
            <p>
              <small>{first_appearance}</small>{' '}
            </p>
            <Link
              to={`./heroe/${id}`}
              className='uk-button-text uk-text-primary uk-align-right'>
              Más...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
