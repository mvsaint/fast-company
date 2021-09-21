/* eslint-disable */
import React, { useState, useEffect } from "react";
import PropType from "prop-types";
import { useHistory } from "react-router-dom";
import api from "../api";
import QualitiesList from "./qualitiesList";

const User = ({ match }) => {
    const history = useHistory();
    const handleBackToList = () => {
        history.push("/users");
    };
    const userId = match.params.userId;
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    return user ? (
        <div className="container-fluid">
            <h1>{user.name}</h1>
            <h2>Профессия: {user.profession.name}</h2>
            <div className="d-flex">
                <QualitiesList qualities={user.qualities} />
            </div>
            <p>completedMeetings: {user.completedMeetings}</p>
            <h3>Rate: {user.rate}</h3>
            <button
                className="btn btn-light"
                onClick={() => {
                    handleBackToList();
                }}
            >
                Все пользователи
            </button>
        </div>
    ) : (
        <h1>Loading...</h1>
    );
};

User.propTypes = {
    match: PropType.object
};

export default User;
