import 'primeflex/primeflex.css';
import DataTableCustom  from '../../components/data-table-custom';
import DataService from '../../services/DataService';
import {Card} from "primereact/card";
import './style.scss';

const MainPage: React.FC = () => {

    return (
        <div className="p-grid container main-p-container">
            <h2>How about beer Bro?</h2>

            <Card>
                <DataTableCustom tableRows={DataService.getBeerBrands()}/>
            </Card>
        </div>
    );
}

export default MainPage;