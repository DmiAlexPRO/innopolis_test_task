import { Menubar } from 'primereact/menubar';
import 'primeflex/primeflex.css';

type AppHeaderPropType = {
    menuItems: any[]
};

const AppHeader: React.FC<AppHeaderPropType> = ({menuItems}) => {
    const start = <img alt="logo" src="../logo192.png"
         height="40" className=" app-header-logo" ></img>;
      
    return(
        <Menubar className="p-col app-header" model={menuItems}
            start={start}/>
    );
}

export default AppHeader;