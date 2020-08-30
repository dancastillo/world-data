import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const QUERY_COUNTRIES = gql`
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

export function Countries() {
  const { data, loading } = useQuery(
    QUERY_COUNTRIES, {
      pollInterval: 500
    }
  );

  if (loading) {
    return (<p>Loading....</p>)
  }

  return data.countries.map(({
       code,
       name,
       continent,
       region,
       surfacearea,
       indepyear,
       population,
       lifeexpectancy,
       gnp,
       gnpold,
       localname,
       governmentform,
       headofstate,
       capital,
       code2 ,
  }) => (
    <div key={code}>
      <p>
        Country Code - {code}: {name}
      </p>
    </div>
  ));

}
