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
            } >
                {
                    Object.entries(countries.countries).map(
                        ([country, code ]) => (
                            <option selected={selectedCountry === countries.iso3[code]}
                             key={country} value={countries.iso3[code]}>
                                {country}
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