import {useContext} from "react";
import {ThemeContext} from "../theme";

const UseContextHook = () => {
    // @ts-ignore
    const [theme, toggleTheme] = useContext(ThemeContext);
    return <div>
        <button onClick={toggleTheme}>
            <pre>{JSON.stringify(theme)}</pre>
        </button>
    </div>
}

export default UseContextHook;