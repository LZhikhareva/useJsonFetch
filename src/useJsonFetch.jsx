import { useState, useEffect } from "react";

export default function useJsonFetch(url, opts) {
    const base = import.meta.env.VITE_BASE_URL;
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(base + url, opts)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
                setError(null);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(true);
            });
    }, [url])

    return [data, error, isLoading];
}