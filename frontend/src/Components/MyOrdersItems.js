
import React, { useState, useEffect } from 'react';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { ProductService } from '../services/ProductService';
import { IndianRupee, Star } from 'lucide-react';

export default function MyOrdersItems() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []);


    const itemTemplate = (product) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={product.image} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            <Rating value={product.rating} readOnly cancel={false}></Rating>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.category}</span>
                                    <span className="text-2xl font-semibold"><IndianRupee size={20} />{product.price}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            {/* <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button> */}
                            <h6>
                                Delevered on Mar 23
                            </h6>
                            <p>your item has been on the way</p>
                            <h6 className="lh-1" style={{ color: 'blue', alignItems: "center" }}>
                                <Star fill="blue" size={15} /> Rate & Review Product
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataView value={products} itemTemplate={itemTemplate} />
        </div>
    )
}

// <div className=" p-4 mt-2 lh-1 m-3" style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center' , flexWrap:'wrap', border:'1px solid gray', borderRadius:'7px' }}>
//     <div style={{ flexGrow: 1 }}>
//         <img src={productimage} alt="dfd" className="img-fluid" style={{ width: '100px', height: '100px' }} />
//     </div>
//     <div style={{ flexGrow: 1 }}>
//         <p>product name</p>
//     </div>
//     <div style={{ flexGrow: 1 }}>
//         45888
//     </div>
//     <div style={{ flexGrow: 1 }}>
//         <h6>
//             Delevered on Mar 23
//         </h6>
//         <p>your item has been on the way</p>
//         <h6 className="lh-1" style={{ color: 'blue', alignItems:"center" }}>
//             <Star fill="blue" size={15} /> Rate & Review Product
//         </h6>
//     </div>
// </div>

