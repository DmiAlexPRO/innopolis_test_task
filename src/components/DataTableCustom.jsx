import React from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useState } from 'react';
import { Button } from 'primereact/button';
import DataService from '../services/DataService';
import { Link } from 'react-router-dom';

export const DataTableCustom = (props) => {
    const [favorites, setFavorites] = useState(DataService.getFavorites())

    const mapRows = function(){
        const rows = props.rows.slice(0);
        return rows.map((elem) => {
            elem.isFavorite = favorites.has(elem.id)
            return (elem);
        })
    }

    const [rows, setRows] = useState(mapRows);
    const [first, setFirst] = useState(0);
    
    const strToBool = function(str){
        if(str === 'true')
            return true;
        return false;
    }

    const clickHandler = function(rowData){
        
        const id = Number(rowData.currentTarget.dataset.id);
        const isFavorite = strToBool(rowData.currentTarget.dataset.isfavorite);
        
        let obdatedFavorites = favorites;
        if(isFavorite){
            obdatedFavorites.delete(id);
            setFavorites(obdatedFavorites);
            DataService.setFavorites(obdatedFavorites);
        }else{
            obdatedFavorites.add(id);
            setFavorites(obdatedFavorites);
            DataService.setFavorites(obdatedFavorites);
        }
        const updatedRows = rows.slice(0);
        updatedRows.filter(p => p.id === id)[0].isFavorite = !isFavorite;
        setRows(updatedRows);
            
    }

    const actionBodyTemplate =  function(rowData) {
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

    const linkBodyTemplate =  function(rowData) {
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

    const descriptionBodyTemplate =  function(rowData) {
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