
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from '../services/ProductService';
import { IndianRupee } from 'lucide-react';
import { AllIphones } from '../services/getAllIphones';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ItemsScroller = () => {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };



    useEffect(() => {
        // ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
        AllIphones.getAllIphones().then((data) => setProducts(data));


    }, []);


    const productTemplate = (product) => {
        return (

            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: '#4b5563', fontWeight: "bold" }}>
                    <div className="mb-3">
                        <img src={product.image} alt={product.name} className="w-6 shadow-2" />
                    </div>
                </Link>
                <div>

                    <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: '#4b5563', fontWeight: "bold" }}>
                        <h4 className="mb-1">{product.name}</h4></Link>
                    <h6 className="mt-0 mb-3"><IndianRupee size={13} />{product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" rounded />
                        <Button icon="pi pi-star-fill" rounded severity="success" />
                    </div>
                </div>
            </div>

        );
    };

    return (
        <div className='mt-3' style={{ backgroundColor: 'white' }}>
            <h4 style={{ textAlign: 'center' }} className='p-3'>Select Your Next Iphone</h4>
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}

export default ItemsScroller;
