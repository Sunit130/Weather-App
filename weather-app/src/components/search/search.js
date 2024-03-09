import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../../api';
const axios = require('axios');

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState('');

    const loadOptions = (search) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${search}`, geoApiOptions)
            .then(resp => resp.json())
            .then(resp => {

                return {
                    options: resp.data.map(city => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`
                        }
                    })
                }
            }
            )
            .catch(err => console.log(err))
    }

    const handleSeachChange = (search) => {
        setSearch(search);
        onSearchChange(search);
    }

    return <AsyncPaginate
        placeholder="Search of City"
        debounceTimeout={1000}
        value={search}
        onChange={handleSeachChange}
        loadOptions={loadOptions}
    />
}

export default Search;