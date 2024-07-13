import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import KeyIndexMap from "./components/keyIndexMap";
import ReactFragment from "./components/reactFragment";
import StyledComponent from "./components/styled/styledComponent";
import ParentChildCommunication from "./components/parentChildCommunication";
import UseStateHook from "./components/useStateHook";
import UseEffectHook from "./components/useEffectHook";
import UseReducerHook from "./components/useReducerHook";
import UseContextHook from "./components/useContextHook";
import {ThemeContext} from "./theme";
import UseRefHook from "./components/useRefHook";
import UseMemoHook from "./components/useMemoHook";
import UseCallbackHook from "./components/useCallbackHook";
import UseCustomHook from "./components/useCustomHook";
import UseCustomHook2 from "./components/useCustomHook2";
import ReactMemo from "./components/reactMemo";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./components/dashboard";
import {Layout} from "./components/layout";
import {Article} from "./components/article";
import {Auth} from "./components/auth";
import {ReactPortals} from "./components/react-portals";

function App() {
  // @ts-ignore
  const [theme] = useContext(ThemeContext);
  return (
    <div className="App" style={theme}>
        <Routes>
            <Route path="/" element={<Layout></Layout>}>
                <Route index element={<Dashboard></Dashboard>} />
                <Route path="/key-index-map" element={<KeyIndexMap></KeyIndexMap>}/>
                <Route path="/fragment" element={<ReactFragment shortVersion={true}></ReactFragment>}/>
                <Route path="/styled-component" element={<StyledComponent bold={true}></StyledComponent>}/>
                <Route path="/parent-child-communication" element={<ParentChildCommunication></ParentChildCommunication>}/>
                <Route path="/use-state-hook" element={<UseStateHook></UseStateHook>}/>
                <Route path="/use-effect-hook" element={<UseEffectHook></UseEffectHook>}/>
                <Route path="/use-reducer-hook" element={<UseReducerHook></UseReducerHook>}/>
                <Route path="/use-context-hook" element={<UseContextHook></UseContextHook>}/>
                <Route path="/use-ref-hook" element={<UseRefHook></UseRefHook>}/>
                <Route path="/use-memo-hook" element={<UseMemoHook></UseMemoHook>}/>
                <Route path="/use-callback-hook" element={<UseCallbackHook></UseCallbackHook>}/>
                <Route path="/use-custom-hook" element={<div><UseCustomHook></UseCustomHook><UseCustomHook2></UseCustomHook2></div>}/>
                <Route path="/react-memo" element={<ReactMemo></ReactMemo>}/>
                <Route path="/articles/:slug" element={<Article/>}/>
                <Route path="/react-portals" element={<ReactPortals/>}/>
                <Route path="/private" element={<Auth><div><p>PRIVATE</p></div></Auth>}/>
            </Route>
            <Route path="*" element={<div>404</div>}/>
        </Routes>
    </div>
  );
}

export default App;
