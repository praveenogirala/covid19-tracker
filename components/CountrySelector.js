import useStats from "../utils/useStats";
import Stats from "../components/Stats";
import { useState } from "react";

export default function CountrySelector() {
    const {stats: countries, load, error} = useStats('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCountry] = useState('IND');
    if (load || !countries) return(<p>Loading..</p>);
    if (error) return(<p>Error..</p>);
    return(
        <div>
            <h3>Countries: </h3>
            <select onChange={
                e => {
                    setSelectedCountry(e.target.value);
                }
            }>
                {
                    countries.countries.map(
                        country => (
                            <option 
                            key={country.name}
                            value={country.iso3}
                            selected={selectedCountry === country.iso3}>
                                {country.name}
                            </option>
                        )   
                     )
                }
               
            </select>
            <h2>Currently Showing {selectedCountry}</h2>
            <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>

        </div>
    );
}