import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function AddUser() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        username: "",
        password: ""
    });

    const {email, username, password} = user;

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8080/user`,user)
        navigate("/")
    }

    return <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2>Create an Account</h2>
                <Link to={"/"}>Return to homepage</Link>
                <form onSubmit={(e) => onSubmit(e)}>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="username"
                            className="form-control"
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <br/>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" name="check"/>
                        <label
                            className="form-check-label"
                            htmlFor="check">
                            By creating an account, I agree to GameStoreBG's Terms & Conditions and Privacy Policy.
                        </label>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </div>
}