import React from 'react';
import { useQuery } from 'react-apollo';
import {QUERY_CITIES} from "../../helpers/query";


export function Cities() {
  const { data, loading } = useQuery(QUERY_CITIES);

  if (loading) {
    return (<p>Loading....</p>)
  }

  return data.cities.map(({ id, name }) => (
    <div key={id}>
      <p>
        City - {id}: {name}
      </p>
    </div>
  ));

}
