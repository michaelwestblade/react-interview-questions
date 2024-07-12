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

function App() {
  // @ts-ignore
  const [theme] = useContext(ThemeContext);
  return (
    <div className="App" style={theme}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <KeyIndexMap></KeyIndexMap>
        <ReactFragment shortVersion={true}></ReactFragment>
        <StyledComponent bold={true}></StyledComponent>
        <ParentChildCommunication></ParentChildCommunication>
        <UseStateHook></UseStateHook>
        <UseEffectHook></UseEffectHook>
      <UseReducerHook></UseReducerHook>
      <UseContextHook></UseContextHook>
      <UseRefHook></UseRefHook>
    </div>
  );
}

export default App;
