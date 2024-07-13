import {Navigate} from "react-router-dom";

interface AuthProps  {
    children?: React.ReactNode
}
export const Auth = ({children}: AuthProps) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/"/>
    }

    return <div className="AUTH">
        {children}
    </div>
}