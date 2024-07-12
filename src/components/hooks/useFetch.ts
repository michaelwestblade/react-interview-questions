import {useCallback, useEffect, useState} from "react";

export const useFetch = (url: string): [{
    isLoading: boolean;
    response: any;
    error: any
}, () => void] => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});

    const doFetch = useCallback((options = {}) => {
        setIsLoading(true);
        setOptions(options);
    }, [])

    useEffect(() => {
        if (!isLoading) {
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const responseJson = await response.json();

                setResponse(responseJson);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                // @ts-ignore
                setError(error);
            }
        }

        fetchData();
    }, [isLoading, url, options]);

    return [{response, isLoading, error}, doFetch];
}