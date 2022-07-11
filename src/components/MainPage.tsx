import 'primeflex/primeflex.css';
import Container from '@mui/material/Container';
import { DataTableCustom } from './DataTableCustom';
import DataService from '../services/DataService';
import { Card } from '@mui/material';

const MainPage: React.FC = () => {

    return (
        <Container className="p-grid container main-p-container">
            <h2>How about beer Bro?</h2>

            <Card>
                <DataTableCustom tableRows={DataService.getBeerBrands()}/>
            </Card>
        </Container>
    );
}

export default MainPage;