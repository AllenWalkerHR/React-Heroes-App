import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router';
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { HeroList } from '../components/heroes/HeroList';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
  return (
    <div className='uk-offcanvas-content'>
      <Navbar />
      <div className='uk-container uk-margin-small-top uk-margin-small-bottom'>
        <Switch>
          <Route exact path='/marvel' component={MarvelScreen} />
          <Route exact path='/dc' component={DcScreen} />
          <Route exact path='/heroes' component={HeroList} />
          <Route exact path='/heroe/:heroeID' component={HeroScreen} />
          <Route exact path='/search' component={SearchScreen} />
          <Redirect to='/marvel' />
        </Switch>
      </div>
    </div>
  );
};
