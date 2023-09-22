import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function EditUser() {

    let navigate = useNavigate();

    const {id} = useParams();

    const [user, setUser] = useState({
        email: "",
        username: "",
        password: ""
    });

    const {email, username, password} = user;

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8080/user/${id}`, user)
        navigate("/")
    };

    const loadUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/user/${id}`);
            setUser(result.data);
        } catch (error) {
            console.error('An error occurred while loading users:', error);
        }
    }
        useEffect(() => {
            loadUser();
        }, []);


    return <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2>Edit user</h2>
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
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    </div>
}
