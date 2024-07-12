import React from "react";

const ReactFragment = ({shortVersion = false}) => {
    return shortVersion ? <><span className="short">HI</span></> : <React.Fragment>
        <span>HI</span>
    </React.Fragment>
}

export default ReactFragment;