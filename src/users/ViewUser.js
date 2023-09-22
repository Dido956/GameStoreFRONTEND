import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function ViewUser() {

    const [user, setUser] = useState({
        username: "",
        email: ""
    });

    const {id} = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/user/${id}`);
            setUser(result.data);
        } catch (error) {
            console.log("Error: " + error);
        }
    }


    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md 6 offset-md-3 border rounded p-4 mt-2 shadow"}>
                    <h2 className={"text-center m-2"}>Details of user with id: {user.id} </h2>
                    <div className={"card"}>

                            <ul className={"list-group list-group-flush"}>
                                <li className={"list-group-item text-center"}><b>Username:</b> {user.username} </li>
                                <li className={"list-group-item text-center"}><b>Email:</b>  {user.email}</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}