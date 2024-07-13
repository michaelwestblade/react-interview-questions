import React, {useState} from "react";
import {Modal} from "./modal";

export const ReactPortals = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    return <div>
        <h1>React Portals</h1>
        <button onClick={() => setIsModalOpened(true)}>Open Modal</button>
        <Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)}>
            <form onSubmit={() => setIsModalOpened(false)} className="login-form">
                <section>
                    <label>Email</label>
                    <input type="email"/>
                </section>
                <section>
                    <label>Password</label>
                    <input type="password"/>
                </section>
            </form>
        </Modal>
    </div>
}