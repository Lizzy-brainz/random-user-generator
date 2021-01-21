import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";

const Sidebar = () => {
    return (
        <div className="header-left">
            <h2>
                <span className="span-text">Hello</span> emerald
            </h2>
            <p>Welcome to your dashboard, kindly sort through the user base</p>
            <Form>
                <FormGroup>
                    <input
                        className="input-type"
                        type="text"
                        id="name"
                        placeholder="Find a user"
                    />
                </FormGroup>
            </Form>
            <h5>Show Users</h5>
            <div className="user-wrap">
                <div className="user">
                    <NavLink to="/users">
                        <div className="all-users user">
                            <i className="big inverted users icon"></i>
                        </div>
                        <p>All users</p>
                    </NavLink>
                </div>
                <div className="user">
                    <NavLink to="/users/male">
                        <div className="male-users user">
                            <i className="big inverted male icon"></i>
                        </div>
                        <p>Male users</p>
                    </NavLink>
                </div>
                <div className="user">
                    <NavLink to="/users/female">
                        <div className="female-users user">
                            <i className="big inverted female icon"></i>
                        </div>
                        <p>Female users</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
