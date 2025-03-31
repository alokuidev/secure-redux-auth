import { Link } from "react-router-dom";

const Logout = () =>{

    return(
        <div className="container">
            <h2 className="logout-text">You are Logged Out</h2>
            <p>Thank you for visiting.</p>
            <Link to='/' className="btn">Login Again</Link>
        </div>
    )
}

export default Logout;