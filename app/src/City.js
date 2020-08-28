import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const QUERY_CITIES = gql`
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

export function Cities() {
  const { data, loading } = useQuery(
    QUERY_CITIES, {
      pollInterval: 500
    }
  );

  if (loading) {
    return (<p>Loading....</p>)
  }

  return data.cities.map(({ id, name, district, countrycode, population }) => (
    <div key={id}>
      <p>
        City - {id}: {name}
      </p>
    </div>
  ));

}
