import {memo, useCallback, useState} from "react";

const initialUsers = [
    {"id": "1", "name": "foo"},
    {"id": "2", "name": "bar"},
    {"id": "3", "name": "baz"}
];

const List = memo(({users, onRemove}: {users: any; onRemove: (id: string) => void}) => {
    console.log("RENDER LIST")
    return <ul>
        {users.map((user: any) => <li key={user.id}>{user.name} <span onClick={() => onRemove(user.id)}>X</span></li>)}
    </ul>
})

const UseCallbackHook = () => {
    console.log("RENDER UseCallbackHook")
    const [users, setUsers] = useState(initialUsers);
    const [text, setText] = useState("");
    const handleRemove = useCallback((id: string) => {
        const updatedUsers = users.filter((user: any) => user.id !== id);
        setUsers(updatedUsers);
    }, [users])
    return <div>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <List users={users} onRemove={handleRemove}></List>
    </div>
}

export default UseCallbackHook;