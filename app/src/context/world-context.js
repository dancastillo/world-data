import React from 'react';

const WorldContext = React.createContext({
  continents: null,
  continent: null,
  regions: null,
  region: null,
  country: null,
  countries: null,
  countryLanguage: null,
  cities: null,
  setContinents: (continents) => {},
  setContinent: (continent) => {},
  setRegions: (regions) => {},
  setRegion: (region) => {},
  setCountries: (countries) => {},
  setCountry: (country) => {},
});

export default WorldContext;
