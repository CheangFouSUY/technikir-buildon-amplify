import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home";
import Transactions from "./Pages/Transactions";
import TransferMethod from "./Pages/TransferMethod";
import WithinBank from "./Pages/WithinBank";
import CrossBank from "./Pages/CrossBank";
import CrossCountry from "./Pages/CrossCountry";
import Authorization from "./Pages/Authorization";
import Header from "./shared/Header";

const Main = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route
                    exact = {true} 
                    path = {'/'} 
                    component = {Home}
                />
                <Route
                    exact = {true} 
                    path = {'/transactions/:id'} 
                    component = {Transactions}
                />
                <Route 
                    path = {'/authorization'} 
                    component = {Authorization}
                />
                <Route 
                    path = {'/method/within_bank'} 
                    component = {WithinBank}
                />
                <Route 
                    path = {'/method/cross_bank'} 
                    component = {CrossBank}
                />
                <Route 
                    path = {'/method/cross_country'} 
                    component = {CrossCountry}
                />
                <Route 
                    path = {'/method'} 
                    component = {TransferMethod}
                />
            </Switch>
        </Router>
    )
}

export default Main;
