import React, {useContext} from 'react';

import WorldContext from '../../context/world-context';
import { useQuery } from "@apollo/react-hooks";
import { QUERY_REGIONS} from "../../helpers/query";

export const Regions = () => {
  const { continent, setRegion } = useContext(WorldContext);
  const { data } = useQuery(QUERY_REGIONS, {
    variables: {
      continent: `${continent}`
    }
  });

  const defaultSelectValue = 'default';
  const searchRegion = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    setRegion(null);
    const regionVal = (searchRegion.current.value).trim();

    if (regionVal === defaultSelectValue) {
      return;
    }

    setRegion(regionVal);
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        {
          (data === undefined)
            ? <p>Loading.....</p>
            :(
              <select
                name="searchRegion"
                id="searchRegion"
                ref={searchRegion}
                defaultValue={defaultSelectValue}
              >
                <option disabled value={defaultSelectValue}>Select a Region</option>
                {data.regions.map(({ region }) => (
                  <option value={region} key={region.toLowerCase()}>
                    {region}
                  </option>
                ))};

              </select>
            )
        }
        <button type="submit">Find Region</button>
      </form>
    </div>
  );
};
