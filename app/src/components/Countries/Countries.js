import React from 'react';
import { useQuery } from 'react-apollo';
import {QUERY_COUNTRIES} from "../../helpers/query";

export function Countries() {
  const { data, loading } = useQuery(QUERY_COUNTRIES);

  if (loading) {
    return (<p>Loading....</p>)
  }

  return data.countries.map(({
       code,
       name,
  }) => (
    <div key={code}>
      <p>
        Country Code - {code}: {name}
      </p>
    </div>
  ));

}
