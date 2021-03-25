import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Books} from "./components/Books";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/:page">
                    <Books />
                </Route>
                <Route path="/">
                    <Books />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
