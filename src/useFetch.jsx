import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPadding, setIsPadding] = useState(true);
    const [errorMassage, setErrorMassage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                const data = await res.json();
                setData(data);
                setIsPadding(false);
                setErrorMassage(null);
            } catch (err) {
                setIsPadding(false);
                setErrorMassage(err.message);
                setData(null);
            }
        };

        fetchData();
    }, [url]);

    return { data, isPadding, errorMassage };
};

export default useFetch;
