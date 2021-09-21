import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from "./components/users";
import User from "./components/user";
import NavBar from "./components/navBar";
import Home from "./components/home";
import Login from "./components/login";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route
                    path="/users/:userId"
                    render={(props) => <User {...props} />}
                />
                <Route path="/users" component={Users} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
