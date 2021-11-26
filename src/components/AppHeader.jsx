import { Menubar } from 'primereact/menubar';
import 'primeflex/primeflex.css';

function AppHeader(props){
    const start = <img alt="logo" src="../logo192.png"
         height="40" className=" app-header-logo" ></img>;
      
    return(
        <Menubar className="p-col app-header" model={props.menuItems}
            start={start}/>
    );
}

export default AppHeader;