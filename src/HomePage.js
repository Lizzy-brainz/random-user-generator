import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const HomePage = () => {
  return (
    <div className="header">
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
            <div className="all-users user">
              <i className="big inverted users icon"></i>
            </div>
            <p>All users</p>
          </div>
          <div className="user">
            <div className="male-users user">
              <i className="big inverted male icon"></i>
            </div>
            <p>Male users</p>
          </div>
          <div className="user">
            <div className="female-users user">
              <i className="big inverted female icon"></i>
            </div>
            <p>Female users</p>
          </div>
        </div>
      </div>
      <div className="header-right">
        <div className="header-right-wrap">
          <h3>All Users</h3>
          <p>Filter by:</p>
          <div className="input-wrap">
            <input type="text" className="find-in-list"></input>
            <input type="text" className="country"></input>
            <div className="toggle-icon">
              <i className="toggle on icon"></i>
            </div>
          </div>
          <div className="user-profile">
            <div className="user-profile-1">
              <div className="user-profile-image">
                <img src="#" alt="user 1"></img>
              </div>
              <div className="user-caption">
                <h2 className="user-name">Shalom Chioma</h2>
                <p className="address caption">
                  9278 new road, kilcoole, waterford
                </p>
                <div className="wrap">
                  <i className="envelope outline icon"></i>
                  <p className="email caption">brad.gibson@example.com</p>
                  <div className="phone"></div>
                  <i className="phone volume icon"></i>
                  <p className="phone caption">011-962-7516</p>
                  <div className="user-control">
                    <i className="arrow right icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-profile">
            <div className="user-profile-1">
              <div className="user-profile-image">
                <img src="#" alt="user 1"></img>
              </div>
              <div className="user-caption">
                <h2 className="user-name">Shalom Chioma</h2>
                <p className="address caption">
                  9278 new road, kilcoole, waterford
                </p>
                <div className="wrap">
                  <i className="envelope outline icon"></i>
                  <p className="email caption">brad.gibson@example.com</p>
                  <div className="phone"></div>
                  <i className="phone volume icon"></i>
                  <p className="phone caption">011-962-7516</p>
                  <div className="user-control">
                    <i className="arrow right icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-profile">
            <div className="user-profile-1">
              <div className="user-profile-image">
                <img src="#" alt="user 1"></img>
              </div>
              <div className="user-caption">
                <h2 className="user-name">Shalom Chioma</h2>
                <p className="address caption">
                  9278 new road, kilcoole, waterford
                </p>
                <div className="wrap">
                  <i className="envelope outline icon"></i>
                  <p className="email caption">brad.gibson@example.com</p>
                  <div className="phone"></div>
                  <i className="phone volume icon"></i>
                  <p className="phone caption">011-962-7516</p>
                  <div className="user-control">
                    <i className="arrow right icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-next">

        <button className="btn" type="submit"><i className="cloud download icon"></i>Download results</button>
          <div className="icon-next" style={{display: "flex"}}>

        <div className="user-control left-chevron">
                    <i className="chevron left
 icon"></i>
                  </div>
        <div className="user-control right-chevron">
                    <i className="chevron right
 icon"></i>
                  </div>
          </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
