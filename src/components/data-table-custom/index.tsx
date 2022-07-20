import React from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import './style.scss';
import DataService from '../../services/DataService';

type DataCustomTablePropType = {
    tableRows: any[]
};

const DataTableCustom: React.FC<DataCustomTablePropType> = ({tableRows}) => {
    const [favorites, setFavorites] = useState(DataService.getFavorites())

    const mapRows = () => {
        const rows = tableRows.slice(0);
        return rows.map((elem: any) => {
            elem.isFavorite = favorites.has(elem.id)
            return (elem);
        })
    }

    const [rows, setRows] = useState(mapRows);
    const [first] = useState(0);
    
    const strToBool = (str: string) => str === 'true';

    const clickHandler = (rowData: any) => {
        
        const id = Number(rowData.currentTarget.dataset.id);
        const isFavorite = strToBool(rowData.currentTarget.dataset.isfavorite);
        
        let updatedFavorites = favorites;

        if(isFavorite){
            updatedFavorites.delete(id);
            setFavorites(updatedFavorites);
            DataService.setFavorites(updatedFavorites);
        }else{
            updatedFavorites.add(id);
            setFavorites(updatedFavorites);
            DataService.setFavorites(updatedFavorites);
        }
        const updatedRows = rows.slice(0);
        updatedRows.filter((p: any) => p.id === id)[0].isFavorite = !isFavorite;
        setRows(updatedRows);
            
    }

    const actionBodyTemplate =  (rowData: any) => {
        if(rowData.isFavorite)
            return (
                <React.Fragment>
                    <Button icon="pi pi-heart-fill" 
                        className="p-button-rounded p-button-warning p-mr-2"
                        onClick={clickHandler} data-id={rowData.id}
                        data-isfavorite={rowData.isFavorite}/>
                </React.Fragment>
            );
        else
            return (
                <React.Fragment>
                    <Button icon="pi pi-heart-fill" 
                        className="p-button-rounded p-button-secondary p-mr-2"
                        onClick={clickHandler} data-id={rowData.id}
                        data-isfavorite={rowData.isFavorite}/>
                </React.Fragment>
            );
    }

    const linkBodyTemplate = (rowData: any) => {
        const link = '/about/' + rowData.id;
        return (
            <React.Fragment>
                <Link to={link}  className='no-link'>
                    <Button className="p-button-raised p-button-secondary p-button-text row-link">
                        More details
                    </Button>
                </Link>
            </React.Fragment>
        );  
    }

    const descriptionBodyTemplate = (rowData: any) => {
        return rowData.description.slice(0,30) + '...'; 
    }

    return (
        <DataTable paginator  value={rows} first={first} rows={8}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            rowsPerPageOptions={[8,25,50]}                
            currentPageReportTemplate="{first} - {last} of {totalRecords}">

            <Column field="isfavorite" header="Favorite" body={actionBodyTemplate}></Column>
            <Column field="name" header="Beer brand" ></Column>
            <Column field="description" header="Description" body={descriptionBodyTemplate}></Column>
            <Column headerStyle={{ width: '12rem' }} body={linkBodyTemplate}></Column>
        </DataTable>
    );

}

export default DataTableCustom;