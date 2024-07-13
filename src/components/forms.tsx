import {useState} from "react";

export const Forms = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (evt: any) => {
        evt.preventDefault();
        console.log("register", username, email, password);
    }
    return <div>
        <form action="" onSubmit={register}>
            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <button>Register</button>
        </form>
    </div>
}