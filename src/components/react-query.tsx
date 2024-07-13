import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useState} from "react";

const getArticles = () => fetch('http://localhost:3004/articles').then((res) => res.json());

const createArticle = async (slug: string) => {
    const response = await fetch(`http://localhost:3004/articles/${slug}`, { method: 'POST', body: JSON.stringify({slug})});
    return await response.json();
};

export const ReactQuery = () => {
    const queryClient = useQueryClient();
    const {data: articles = []} = useQuery({queryKey: ['articles'], queryFn: getArticles})
    const createArticleMutation = useMutation({mutationFn: createArticle, onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['articles']})
    }});
    const [inputValue, setInputValue] = useState('');

    const addArticle = () => {
        createArticleMutation.mutate(inputValue);
        setInputValue('');
    }

    return <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />  <button onClick={addArticle}>Add Article</button>
        TOTAL: {articles.length} {articles?.map((article: any, index: number) => <p key={index}>{article.slug}</p>)}
    </div>
}