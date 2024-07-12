import {MouseEvent, useEffect, useState} from "react";

const UseEffectHook = () => {
    const [buttonClicks, setButtonClicks] = useState<number>(0);
    const [buttonClicks2, setButtonClicks2] = useState<number>(0);
    const [articles, setArticles] = useState([]);
    const onButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
        setButtonClicks((previousCount) => previousCount + 1);
    }

    const onButtonClick2 = (evt: MouseEvent<HTMLButtonElement>) => {
        setButtonClicks2((previousCount) => previousCount + 1);
    }

    useEffect(() => {
        console.log("USE EFFECT");
        document.title = `You clicked ${buttonClicks} times`
    });

    useEffect(() => {
        console.log("USE EFFECT WITH DEPS");
        document.title = `You clicked ${buttonClicks} times`
    }, [buttonClicks]);

    useEffect(() => {
     fetch("http://localhost:3004/articles").then(response => response.json()).then(articles => setArticles(articles))
    }, []);

    return <div>
        <button onClick={onButtonClick}>{buttonClicks}</button>
        <button onClick={onButtonClick2}>{buttonClicks2}</button>
        <ul>
            {articles.map((article: {title: string}, index) => <li key={index}>
                <h4>{article?.title}</h4>
            </li>)}
        </ul>
    </div>
}

export default UseEffectHook;