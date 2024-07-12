import {MouseEvent, MouseEventHandler, useState} from "react";

const UseStateHook = () => {
    const [buttonClicks, setButtonClicks] = useState<number>(0);
    const onButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
        setButtonClicks((previousCount) => previousCount + 1);
    }

    return <button onClick={onButtonClick}>{buttonClicks}</button>
}

export default UseStateHook;