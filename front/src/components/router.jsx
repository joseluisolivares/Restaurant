import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Admin from './admin';
import Home from './Home/home';
import Menu from './menu';
const Router = () => {
    
    return ( 
        <Fragment>
           <BrowserRouter>
                <Redirect
                    from="/"
                    to="/home" 
                />
                <Switch>
                    <Route
                        path="/home"
                        component={Home} 
                    />

                    <Route
                        path="/admin"
                        component={Admin} 
                    />

                    <Route
                        path="/menu"
                        component={Menu} 
                    />

                </Switch>
			</BrowserRouter>
        </Fragment>
     );
}
 
export default Router;

