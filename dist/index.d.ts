export declare function useQuery(): {
    loading: boolean;
    fetch: <T>(input: RequestInfo, init?: RequestInit | undefined) => Promise<T>;
};
