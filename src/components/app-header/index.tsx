import { Menubar } from 'primereact/menubar';
import 'primeflex/primeflex.css';
import './style.scss';
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Dropdown} from "primereact/dropdown";
import {Checkbox} from "primereact/checkbox";



const AppHeader: React.FC = () => {
    const start = <img alt="logo" src="../logo192.png"
         height="40" className=" app-header-logo" ></img>;

    // <Menubar className="p-col app-header"
    //     model={menuItems}
    //     start={start}
    // />
    const menuItems = [
        {
            label: 'Main',
            path: '/'
        },
        {
            label: 'About me',
            path: '/aboutme'
        },
    ];

    type MenuPropType = {
        menuItems: any[]
    };

    const Menu: React.FC<MenuPropType> = ({ menuItems}) => {

        return(
            <ul className='menu'>
                {menuItems.map((menuItem: any) => {
                    return(
                        <li>
                            <Link to={menuItem.path}>{menuItem.label}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    };

    return(
        <div className='header'>
            <div className="container flex">
                <img alt="logo"
                    src='../logo192.png'
                    className="app-header-logo"
                />
                <Menu menuItems={menuItems} />

            </div>
        </div>

    );
}

export default AppHeader;