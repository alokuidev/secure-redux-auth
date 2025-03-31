import { useNavigate } from "react-router-dom"

const Dashboard = () =>{
    const navigate = useNavigate();
    const logout = () =>{
        sessionStorage.removeItem('user');
        navigate('/logout')
    }
    return(
        <>
            <div className="container">
                <h2>Welcome, {sessionStorage.getItem('user')?.trim()}</h2>
                <p>You are successfully logged in.</p>
                <a href="#" className="btn logout" onClick={logout}>Logout</a>
            </div>
        </>
    )
}

export default Dashboard;