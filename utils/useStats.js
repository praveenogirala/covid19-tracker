import { useState, useEffect } from "react";

export default function useStats(url) {
    const [stats, setStats] = useState();
    const [load, setLoad] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        async function fetchData() {
            setLoad(true);
            setError();
            console.log('fetching data');
            const data = await fetch(url)
                .then(res => res.json())
                .catch(err => {
                    setError(err);
                })
                ;
            setStats(data);
            setLoad(false);
        }
        fetchData();
    }, [url]);
    return { stats, load, error };
}