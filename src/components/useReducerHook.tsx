import {useEffect, useReducer} from "react";

const initialState = {
    isLoading: false,
    error: null,
    data: null
}

interface LoadingState {
    isLoading: boolean;
    error: Error | null;
    data?: any;
}

const reducer = (state: LoadingState, action: any) => {
    console.log('reducer', state, action);

    switch (action.type) {
        case 'getArticleStart':
            return {
                ...state,
                isLoading: true,
            }
        case 'articlesLoaded':
            return {
                ...state,
                data: action.payload,
            }
        default: {
            return state;
        }
    }
    return state;
}

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type: 'getArticlesStart'})
        fetch("http://localhost:3004/articles").then(response => response.json()).then(articles => dispatch({type: 'articlesLoaded', payload: articles}))
    }, [])

    return <div>
        <h4>Use REDUCER</h4>
        <ul>
            {!state.isLoading && state.data && state.data.length ? state.data.map((article: { title: string }, index: number) => <li key={index}>
                <h4>{article?.title}</h4>
            </li>) : <p>LOADING</p>}
        </ul>
    </div>
}

export default UseReducerHook;