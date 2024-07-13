import {useParams, useSearchParams} from "react-router-dom";

export const Article = () => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    return <article>
        <h1>{params.slug}</h1>
        <p>Page {searchParams.get('page')}</p>
    </article>
}