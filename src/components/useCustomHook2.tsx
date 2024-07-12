import {useLocalStorage} from "./hooks/useLocalStorage";

const UseCustomHook2 = () => {
    const [name, setName] = useLocalStorage("name", "Jack");
    return <div>
        <hr/>
        <h1>Another Custom Hook</h1>
        <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)}/>
    </div>
}

export default UseCustomHook2