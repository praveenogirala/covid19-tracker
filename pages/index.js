import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

`;

export default function IndexPage() {
    return(
        <div>
            <Stats url="https://covid19.mathdro.id/api"></Stats>
            <CountrySelector></CountrySelector>
        </div>
    );
}