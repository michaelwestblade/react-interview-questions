import withDataFetching from "./withDataFetching";

interface ReposProps {
    isLoading: boolean;
    error?: any;
    data?: {id: string; html_url: string; full_name: string;}[]
}

export const Repos = ({isLoading, error, data}: ReposProps) => {
    if (isLoading) {
        return <div><p>IS LOADING</p></div>
    }

    if (error) {
        return <div><p>{error.message}</p></div>
    }

    if (data) {
        return <div>
            <ul>
                {data.map(repo => <li key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.full_name}</a>
                </li>)}
            </ul>
        </div>
    }
}

interface HighOrderComponentsProps {
    dataSource: string
}

// @ts-ignore
export default withDataFetching({dataSource: "https://api.github.com/users/monsterlessonsacademy/repos"})(Repos)