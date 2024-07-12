const KeyIndexMap = () => {
    const users = [
        {"id": "1", "name": "foo"},
        {"id": "2", "name": "bar"},
        {"id": "3", "name": "baz"}
    ];

    return (
        <div className="app">
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    )
}

export default KeyIndexMap;