import React, { Fragment } from 'react';
import { Router, Route } from "react-router-dom";
import history from './history';
import Home from '../screens/HomeScreen/Home';
import FirstTask from '../screens/TaskScreens/FirstTask';
import SecondTask from '../screens/TaskScreens/SecondTask';
import ThirdTask from '../screens/TaskScreens/ThirdTask';
import FourthTask from '../screens/TaskScreens/FourthTask';
import FifthTask from '../screens/TaskScreens/FifthTask';
import SixthTask from '../screens/TaskScreens/SixthTask';
import SeventhTask from '../screens/TaskScreens/SeventhTask';


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/tasks/first_task',
        component: FirstTask
    },
    {
        path: '/tasks/second_task',
        component: SecondTask
    },
    {
        path: '/tasks/third_task',
        component: ThirdTask
    },
    {
        path: '/tasks/fourth_task',
        component: FourthTask
    },
    {
        path: '/tasks/fifth_task',
        component: FifthTask
    },
    {
        path: '/tasks/sixth_task',
        component: SixthTask
    },
    {
        path: '/tasks/seventh_task',
        component: SeventhTask
    },
]


const AppNavigator = () => {
    return ( 
     <Router history={history}>
        <Fragment>
        {routes.map(route => (
            <Route key={route.path} exact path={route.path} component={route.component} />
        ))}
        </Fragment>
     </Router>
     );
}
 
export default AppNavigator;
