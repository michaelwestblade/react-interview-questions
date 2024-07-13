import {useState} from "react";
import ImageSlider from "./ImageSlider";

const ReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [slides] = useState([
        { url: "http://localhost:3000/image-1.jpeg", title: "beach" },
        { url: "http://localhost:3000/image-2.jpeg", title: "boat" },
        { url: "http://localhost:3000/image-3.jpeg", title: "forest" },
        { url: "http://localhost:3000/image-4.jpeg", title: "city" },
        { url: "http://localhost:3000/image-5.jpeg", title: "italy" },
    ]);
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };

    return <div>
        <hr/>
        <h1>React Memo</h1>
        <h1>Hello monsterlessons</h1>
        <button onClick={() => setCounter(counter + 1)}>Counter</button>
        <div style={containerStyles}>
            <ImageSlider slides={slides} parentWidth={500} />
        </div>
    </div>
}

export default ReactMemo;