import { Link } from "react-router-dom";
import AppHeader from "../../components/app-header";
import { Outlet } from "react-router";
import React from "react";
import './style.scss';

const Layout: React.FC = () =>  {


    return (
        <div className='wrapper'>
            <AppHeader />
            <div className="container">
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;


    
