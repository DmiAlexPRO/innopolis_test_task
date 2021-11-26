import { Link } from "react-router-dom";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router";

function Layout(){
    const menuItems = [
        {
            label: 'Main',
            template: (item,options)=>{
                return(
                    <Link class to='/'>{item.label}</Link>
                );
            }   
        },
        {
            label: 'About me',
            template: (item,options)=>{
                return(
                    <Link to='/aboutme'>{item.label}</Link>
                );
            }          
        },
    ];

    return(
        <>  
            <AppHeader menuItems={menuItems}/>  
            <Outlet/> 
        </>
    );
}

export default Layout;


    
