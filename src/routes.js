import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Destiny from './pages/destiny';
import Home from './pages/home';

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/destiny' exact>
                    <Destiny />
                </Route>
                <Route path='/#newslatter'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}