import {useFetch} from "./hooks/useFetch";
import {useEffect} from "react";

const UseCustomHook = () => {
    const [{response, error, isLoading}, doFetch] = useFetch('http://localhost:3004/articles');

    useEffect(() => {
        doFetch()
    }, [doFetch]);

    return <div>
        <hr/>
        <h1>Custom Hook</h1>
        {isLoading ? <p>LOADING</p>: undefined}
        {error ? <p>ERROR</p> : undefined}
        {response && response.length ? <ul>{response.map((item: any) => <li key={item.id}>{item.title}</li>)}</ul> : undefined}
    </div>
}

export default UseCustomHook;