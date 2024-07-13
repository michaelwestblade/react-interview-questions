import React from "react";
import {About} from "./about";

// const About = React.lazy(() => import('./about', <div></div>))
export const ReactSuspense = () => {
    return <div>
        <React.Suspense fallback={<p>?</p>}>
            <About/>
        </React.Suspense>
    </div>
}