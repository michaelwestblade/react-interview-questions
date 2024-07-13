import {Link, Route} from "react-router-dom";
import KeyIndexMap from "./keyIndexMap";
import ReactFragment from "./reactFragment";
import StyledComponent from "./styled/styledComponent";
import ParentChildCommunication from "./parentChildCommunication";
import UseStateHook from "./useStateHook";
import UseEffectHook from "./useEffectHook";
import UseReducerHook from "./useReducerHook";
import UseContextHook from "./useContextHook";
import UseRefHook from "./useRefHook";
import UseMemoHook from "./useMemoHook";
import UseCallbackHook from "./useCallbackHook";
import UseCustomHook from "./useCustomHook";
import UseCustomHook2 from "./useCustomHook2";
import ReactMemo from "./reactMemo";
import React from "react";

export const Dashboard = () => {
    const links = [
        "/key-index-map",
        "/fragment",
        "/styled-component",
        "/parent-child-communication",
        "/use-state-hook",
        "/use-effect-hook",
        "/use-reducer-hook",
        "/use-context-hook",
        "/use-ref-hook",
        "/use-memo-hook",
        "/use-callback-hook",
        "/use-custom-hook",
        "/react-memo",
    ]
    return <div>
        <h1>Dashboard</h1>
        <ul>
            {links.map((link, index) => <li key={index}><Link to={link}>{link}</Link></li>)}
        </ul>
    </div>
}