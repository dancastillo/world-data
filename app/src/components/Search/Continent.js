import React, { useContext } from 'react';
import { useQuery } from 'react-apollo';
import { QUERY_CONTINENTS } from "../../helpers/query";
import WorldContext from '../../context/world-context';

const SearchContinent = () => {
  const { data } = useQuery(QUERY_CONTINENTS);
  const { setContinent } = useContext(WorldContext);

  const defaultSelectValue = 'default';
  const searchContinent = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    setContinent(null);
    const continentVal = (searchContinent.current.value).trim();

    if (continentVal === defaultSelectValue) {
      return;
    }

    setContinent(continentVal);
  };

  return (
      <div>
        <form onSubmit={ handleSubmit }>
          {
            (data === undefined)
              ? <p>Loading.....</p>
              :(
                <select
                  name="searchContinent"
                  id="searchContinent"
                  ref={searchContinent}
                  defaultValue={defaultSelectValue}
                >
                  <option disabled value={defaultSelectValue}>Select a Continent</option>
                  {data.continents.map(({ continent }) => (
                    <option value={continent} key={continent.toLowerCase()}>
                      {continent}
                    </option>
                  ))};

                </select>
              )
          }
          <button type="submit">Find Continent</button>
        </form>
      </div>
    );
};

export default SearchContinent;
