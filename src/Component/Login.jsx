import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLoginAction } from "../Redux/authLoginslice";
import { useNavigate } from "react-router-dom";

const Login = () =>{
  
    const userName = useRef();
    const pwd = useRef(); 
   
    const dispatch = useDispatch();
    const userDetail = useSelector((state) => state.login);

    const navigate = useNavigate();

    const CheckAuth = async () =>{
        const AuthResponse = await dispatch(authLoginAction());
        return AuthResponse;
    }
    useEffect(()=>{
        if(sessionStorage.getItem('user') != null ){
            navigate("/dashboard");
        }
        else{
            CheckAuth();
        }
        
    },[])
    const loginCheck = (e) =>{
        e.preventDefault();
        console.log(userName.current.value.trim(), userDetail.detail.username.trim())
        if(userName.current.value.trim() === userDetail.detail.username.trim()){
            navigate("/dashboard");
            sessionStorage.setItem('user',userDetail.detail.username.trim())
        }
    }
    return(
        <>
            <div className="container">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" ref={userName} placeholder="Enter your email"/>
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" ref={pwd} placeholder="Enter your password"/>
                    </div>
                    <button className="btn" onClick={loginCheck}>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login; 