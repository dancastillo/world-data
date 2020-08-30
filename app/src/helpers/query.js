import {gql} from "apollo-boost";

export const QUERY_CITIES = gql`
  query {
    cities {
      id
      name
      district
      countrycode
      population
    }
  }
`;

export const QUERY_COUNTRIES = gql`
  query {
    countries {
      code
      name
      continent
      region
      surfacearea
      indepyear
      population
      lifeexpectancy
      gnp
      gnpold
      localname
      governmentform
      headofstate
      capital
      code2
    }
  }
`;

export const QUERY_COUNTRY_LANGUAGES = gql`
  query {
    countryLanguages {
      countrycode
      language
      isofficial
      percentage
    }
  }
`;

export const QUERY_CONTINENTS = gql`
  query {
    continents {
      continent
    }
  }
`;

