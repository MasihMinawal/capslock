import { useState, useEffect } from 'react';
const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const abortCont = new AbortController();

    useEffect(() => {
        fetch(url, {signal: abortCont.signal})
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setData(data);
            setIsPending(false);
        });
        return () => abortCont.abort();

    }, [url]);
return { data, isPending};
}

export default useFetch;