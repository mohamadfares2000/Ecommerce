import React from 'react';

import {useRoutes} from "react-router-dom";
import SignUp from './components/sign up/SignUp';
import HomePage from './pages/homePage/HomePage';
import SignIn from './components/sign in/SignIn';

function Router(props) {
    const routes = useRoutes([
        {path:"/", element: <HomePage/> },
        {path:"/signUp", element: <SignUp/>},
        {path:"/signin", element: <SignIn/>}
    ])
    return (
        routes
    );
}

export default Router;