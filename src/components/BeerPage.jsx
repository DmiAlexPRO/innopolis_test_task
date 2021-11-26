import 'primeflex/primeflex.css';
import Container from '@mui/material/Container';
import { Button } from 'primereact/button';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';
import DataService from '../services/DataService';
import { Image } from 'primereact/image';

function BeerPage(props){
    const location = useLocation();
    const [beerBrand, setBeerBrand] = useState(function(){
        const id = Number(location.pathname.split('/').pop());
        const beerBrand = DataService.getBeerBrands().filter((p) => p.id === id)[0];
        beerBrand.isFavorite = DataService.getFavorites().has(beerBrand.id);
        return beerBrand;
    }())

    const buttonClickHandker = function(){
        const favorites = DataService.getFavorites();
        if(beerBrand.isFavorite)
            favorites.delete(beerBrand.id);
        else
            favorites.add(beerBrand.id);

        DataService.setFavorites(favorites);

        const updatedBrand = {...beerBrand};
        updatedBrand.isFavorite = !updatedBrand.isFavorite;
        setBeerBrand(updatedBrand);
    }

    const button = function(){
        if(beerBrand.isFavorite)
            return (
                <Button icon="pi pi-heart-fill" onClick={buttonClickHandker}
                    className="p-button-rounded beer-fab p-button-warning" />
            );
        else
            return (
                <Button icon="pi pi-heart-fill" onClick={buttonClickHandker}
                    className="p-button-rounded beer-fab p-button-secondary" />
            );
    }();


    return(
        <Container className="">
            <Card className=" p-grid p-mt-3 beer-card">
                <div className='p-p-3 p-col-12 p-lg-6'>
                    <Link to='/' className='no-link'>
                        <Button icon="pi pi-arrow-left" 
                            label="Back to main" 
                            className="p-button-link button-link"/>   
                    </Link> 
                    <h2 >More about {beerBrand.name}</h2>
                    <p>{beerBrand.description}</p>
                </div>

                <div className='p-p-3 p-col-12 p-lg-6 beer-img'>
                    <Image src={beerBrand.image_url}
                    alt="Beer photo" className='' /> 
                </div>
                {button}
            </Card>
        </Container>
    );
}

export default BeerPage;