import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Admin from '../components/admin/admin';
import Home from './Home/home';
import Menu from './menu/menu';
import Starters from './starters/starters';
import MainCourses from './mainCourses/MainCourses';
import Desserts from './desserts/Desserts';
import Drinks from './drinks/Drinks';
import Order from './order/order';
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

                    <Route
                        path="/administrador/entrantes"
                        component={Starters} 
                    />

                    <Route
                        path="/administrador/principales"
                        component={MainCourses} 
                    />

                    <Route
                        path="/administrador/postres"
                        component={Desserts} 
                    />

                    <Route
                        path="/administrador/bebidas"
                        component={Drinks} 
                    />

                    <Route
                        path="/entrantes"
                        component={Starters} 
                    />

                    <Route
                        path="/principales"
                        component={MainCourses} 
                    />

                    <Route
                        path="/postres"
                        component={Desserts} 
                    />

                    <Route
                        path="/bebidas"
                        component={Drinks} 
                    />

                    <Route
                        path="/pedido"
                        component={Order} 
                    />

                </Switch>
			</BrowserRouter>
        </Fragment>
     );
}
 
export default Router;

