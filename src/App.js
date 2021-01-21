import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Homepage from "./HomePage";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/users" />}
                    />
                    <div>
                        <Homepage />
                    </div>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
