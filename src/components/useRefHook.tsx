import {MutableRefObject, useRef, useState} from "react";

const UseRefHook = (props: any) => {
    const [username, setUsername] = useState("");
    const textInput: MutableRefObject<HTMLInputElement | null> = useRef(null);

    const onTextFocus = () => {
        console.log('onFocus', textInput?.current?.value);
        textInput?.current?.focus();
    }

    return <div>
        <input type="text" ref={textInput} value={username} onChange={e => setUsername(e.target.value)} />
        {username}
        <button onClick={onTextFocus}>Focus on input</button>
    </div>
}

export default UseRefHook;