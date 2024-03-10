
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { TopDeals } from '../services/topDeals';
import { MidRangePhones } from '../services/midRangePhones';
import { Link } from 'react-router-dom';
import { IndianRupee } from 'lucide-react';

const MidRangePhonesView = () => {

    const [layout, setLayout] = useState('grid');
    const [products, setProducts] = useState([]);
    useEffect(() => {
        MidRangePhones.getMidRangePhones().then((data) => setProducts(data));
    }, []);

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

    const listItem = (product) => {
        return (
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: '#4b5563', fontWeight: "bold" }}>

                <div className="col-12">
                    <div className="d-flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={product.image} alt={product.name} />
                        <div className="d-flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div className="d-flex flex-column align-items-center sm:align-items-start gap-3">
                                <div className="text-2xl font-bold text-900">{product.name}</div>
                                <Rating value={product.rating} readOnly cancel={false}></Rating>
                                <div className="d-flex align-items-center gap-3">
                                    <span className="d-flex align-items-center gap-2">
                                        <i className="pi pi-tag"></i>
                                        <span className="font-semibold">{product.category}</span>
                                    </span>
                                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                                </div>
                            </div>
                            <div className="d-flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span className="text-2xl font-semibold"><IndianRupee size={16} />{product.price}</span>
                                <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    };

    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="d-flex align-items-center gap-2">
                            <i className="pi pi-tag"></i>
                            <span className="font-semibold">{product.category}</span>
                        </div>
                        <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    </div>
                    <div className="d-flex flex-column align-items-center gap-3 py-5">
                        <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: '#4b5563', fontWeight: "bold" }}>
                            <img className="w-9 shadow-2 border-round" src={product.image} alt={product.name} />
                            <div className="text-2xl font-bold">{product.name}</div>
                        </Link>
                        <Rating value={product.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold"><IndianRupee size={16} />{product.price}</span>
                        <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return listItem(product);
        else if (layout === 'grid') return gridItem(product);
    };

    const header = () => {
        return (
            <div className="d-flex justify-content-end">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };

    return (
        <div className="card mt-3">
            <DataView value={products} itemTemplate={itemTemplate} layout={layout} header={header()} />
        </div>
    )
}

export default MidRangePhonesView;
