import React from 'react';
import { useQuery } from 'react-apollo';
import {QUERY_COUNTRY_LANGUAGES} from "../../helpers/query";

export function CountryLanguages() {
  const { data, loading } = useQuery(QUERY_COUNTRY_LANGUAGES);

  if (loading) {
    return (<p>Loading....</p>)
  }

  return data.countryLanguages.map(({ countrycode, language }) => (
    <div key={`${countrycode}-${language}`}>
      <p>
        Country Code - {countrycode}: {language}
      </p>
    </div>
  ));

}
