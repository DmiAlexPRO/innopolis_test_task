import { Link } from "react-router-dom";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router";
import React from "react";

const Layout: React.FC = () =>  {
    const menuItems = [
        {
            label: 'Main',
            template: (item: any) => {
                return(
                    <Link to='/'>{item.label}</Link>
                );
            }   
        },
        {
            label: 'About me',
            template: (item: any)=>{
                return(
                    <Link to='/aboutme'>{item.label}</Link>
                );
            }          
        },
    ];

    return (
        <>  
            <AppHeader menuItems={menuItems}/>  
            <Outlet/> 
        </>
    );
}

export default Layout;


    
