import {useMemo, useState} from "react";

const users = [
    {"id": "1", "name": "foo"},
    {"id": "2", "name": "bar"},
    {"id": "3", "name": "baz"}
];

const UseMemoHook = (props: any) => {
    const [search, setSearch] = useState('');
    const [text, setText] = useState("");

    const handleSearch = () => {
        setSearch(text);
        setText('');
    }

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

    const filteredUsersMemoized = useMemo(() => {
        console.log("filteredUsersMemoized");
        return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
    }, [search]);

    return <div>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <span>INPUT : {text}</span> --- <span>SEARCH: {search}</span>
        <button onClick={handleSearch}>Search</button>
        <ul>
            {filteredUsers.map(user => <li key={user.id}>{user.name}</li>)}
            {filteredUsersMemoized.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
}

export default UseMemoHook;