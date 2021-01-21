import React from "react";
import { Route } from "react-router";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Sidebar from "./Sidebar";
import Users from "./Users";

const HomePage = () => {
    return (
        <div className="header">
            <Sidebar />
            <Route exact path="/users" component={Users} />
        </div>
    );
};

export default HomePage;
