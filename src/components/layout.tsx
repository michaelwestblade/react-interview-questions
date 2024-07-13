import {Link, Outlet} from "react-router-dom";
import React from "react";

export const Layout = () => {
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
        "/react-portals",
        "/react-suspense",
        "/higher-order",
        "/forms",
        "/react-query"
    ]
    return <div>
        <header>
            <ul>
                {links.map((link, index) => <li key={index}><Link to={link}>{link}</Link></li>)}
            </ul>
        </header>
        <div>
            <Outlet/>
        </div>
    </div>
}