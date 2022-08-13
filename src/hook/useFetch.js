import { useEffect, useState } from 'react';

const useFetch = (url, option) => {
    const [getData, setGetData] = useState([]);
    const [loading, setLoading] = useState(null);
    let fetchApi = async () => {
        
        setLoading(false);
        try {
            let responsive = await fetch(url, { ...option }).then((repon) =>
                repon.json(),
            );
            let data = await responsive;
            setGetData(data);
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let ismount = true;
        if (ismount) {
            fetchApi();
        }

        return () => {
            ismount = !ismount;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return { getData, loading };
};

export default useFetch;
