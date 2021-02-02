import useSWR from "swr";
import { fetcher } from "./fetcher";

const useFetch = (url) => {
    const { data, error } = useSWR(url, fetcher, {
        onErrorRetry: (error, revalidate, { retryCount }) => {
            // Never retry on 404.
            if (error.status === 404) return;
            // Only retry up to 10 times.
            if (retryCount >= 10) return;
            // Retry after 5 seconds.
            setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000);
        }
    });

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";

    return { data, error };
};

export default useFetch;
