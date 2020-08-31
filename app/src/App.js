import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// Context
import WorldContext from './context/world-context';

// Components
import Map from "./components/Map/Map";
import Continent from "./components/Search/Continent";
import { Regions } from "./components/Regions/Regions";

import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
});


const App = () => {
  const continentsString = 'continents';
  const continentString = 'continent';
  const regionsString = 'regions';
  const regionString = 'region';
  const countriesString = 'countries';
  const countryString = 'country';

  const updateState = (key, value) => setState({
    ...state,
    [key]: value
  });

  const setContinents = (continents) => updateState(continentsString, continents);
  const setContinent = (continent) => updateState(continentString, continent);
  const setRegions = (regions) => updateState(regionsString, regions);
  const setRegion = (region) => updateState(regionString, region);
  const setCountries = (countries) => updateState(countriesString, countries);
  const setCountry = (country) => updateState(countryString, country);

  const [state, setState] = useState({
    continents: null,
    continent: null,
    regions: null,
    region: null,
    countries: null,
    country: null,
    countryLanguage: null,
    cities: null,
    setContinents: setContinents,
    setContinent: setContinent,
    setRegions: setRegions,
    setRegion: setRegion,
    setCountries: setCountries,
    setCountry: setCountry,
  });

  return (
    <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <WorldContext.Provider value={state}>
              <main className="main-content">
                <Switch>
                  <Route path="/map">
                    <Map />
                  </Route>
                  <Route exact path="/">
                    <Continent />
                    {state.continent !== null
                      ? <Regions />
                      : <></>
                    }
                  </Route>
                </Switch>
              </main>
            </WorldContext.Provider>
          </React.Fragment>
        </Router>
    </ApolloProvider>
  )
};

export default App;
