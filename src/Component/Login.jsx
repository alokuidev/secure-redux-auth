
const Login = () =>{

    return(
        <>
            <div className="container">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email"/>
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password"/>
                    </div>
                    <button className="btn">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login; 