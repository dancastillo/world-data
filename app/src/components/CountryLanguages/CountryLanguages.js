import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const QUERY_COUNTRY_LANGUAGES = gql`
  query {
    countryLanguages {
      countrycode
      language
      isofficial
      percentage
    }
  }
`;

export function CountryLanguages() {
  const { data, loading } = useQuery(
    QUERY_COUNTRY_LANGUAGES, {
      pollInterval: 500
    }
  );

  if (loading) {
    return (<p>Loading....</p>)
  }

  return data.countryLanguages.map(({
                                      countrycode,
                                      language,
                                      isofficial,
                                      percentage
                                    }) => (
    <div key={`${countrycode}-${language}`}>
      <p>
        Country Code - {countrycode}: {language}
      </p>
    </div>
  ));

}
