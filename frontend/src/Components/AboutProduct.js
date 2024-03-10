import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductService } from '../services/ProductService';
import { Rating } from 'primereact/rating';
import { IndianRupee } from 'lucide-react';
import { Tag } from 'primereact/tag';
import RatingAndReview from './RatingAndReview';
import Footer from './Footer';
import { GetProductById } from '../services/getProductById';




const AboutProduct = () => {
    const { id } = useParams();
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        GetProductById.getProduct(id).then((data)=>setProducts(data));
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
    return (
        <div className="container-fluid">

            <div className="row">
                {/* First div with fixed height and width */}
                <div className="col-md-6" style={{ height: '90vh', backgroundColor: '#fff', textAlign: 'center', }}>
                    <div className='mt-5 w-100'>
                        {
                            products.map((item , index)=>(

                                <img className="img-fluid p-4" key={index} src={item.image} alt={item.name} style={{ width: '50vh', height: 'auto', border: '1px solid gray', borderRadius: '7px' }} />
                            ))
                        }
                    </div>


                    <div style={{ flexWrap: "wrap" }}>
                        {/* <Button className='p-3 ms-3' icon="pi pi-shopping-cart" label="ADD TO CART" severity="warning" />
                <Button className='p-3 ms-3' label="BUY NOW" severity="success" style={{width:'30vh'}} /> */}

                        <Link to="/ddd">
                            {/* ADD TO CART */}
                            <Button className='p-3 ms-3 mt-3' label="ADD TO CART" icon="pi pi-shopping-cart" severity="warning" style={{ width: '30vh', flexGrow: '1' }} />
                        </Link>

                        <Link to="/ddd">
                            <Button className='p-3 ms-3 mt-3' label="BUY NOW" icon="pi pi-gift" severity="success" style={{ width: '30vh', flexGrow: '1' }} />
                        </Link>

                    </div>


                </div>

                {/* Second div with scrollable content */}
                {
                    products.map((item, index) => (
                        <div className="col-md-6" style={{ height: '90vh', overflowY: 'scroll', backgroundColor: '#fff', alignItems: 'center', flexDirection: 'column' }} key={index}>
                            <h4 className='mt-5'>{item.name}</h4>
                            <Rating value={item.rating} readOnly cancel={false}></Rating>
                            <h6 style={{ color: "darkgreen" }}>Extra <IndianRupee color='darkgreen' size={15} />4000 off</h6>
                            <div style={{ alignItems: "center" }}>
                                <span style={{ fontSize: '30px', fontWeight: 'bold' }}><IndianRupee size={28} />{item.price} </span>
                                <span><del><IndianRupee size={15} />{item.price % 15 + item.price}</del></span>
                                <span style={{ color: 'darkgreen', fontWeight: 'bold' }}>15% off</span>
                            </div>
                            <p>+ <IndianRupee size={12} />59 Secured Packaging Fee</p>
                            <Tag value={item.inventoryStatus} severity={getSeverity(item)}></Tag>
                            <h4>Available Offers</h4>
                            <p><i className="pi pi-tag" style={{ fontSize: '20px' }}></i>&nbsp;&nbsp;<b>Bank Offer</b> 5% Cashback on Axis Bank Card <b style={{ color: 'blue' }}>T&C</b></p>
                            <p><i className="pi pi-tag" style={{ fontSize: '20px' }}></i>&nbsp;&nbsp;<b>Special Price</b> Get extra <IndianRupee size={12} />400 off (price inclusive of cashback/coupon) <b style={{ color: 'blue' }}>T&C</b></p>
                            <p><i className="pi pi-tag" style={{ fontSize: '20px' }}></i>&nbsp;&nbsp;<b>Freebie</b> Spotify Premium - 12M at <IndianRupee size={12} />  <b style={{ color: 'blue' }}>T&C</b></p>
                            <p><i className="pi pi-tag" style={{ fontSize: '20px' }}></i>&nbsp;&nbsp;Buy this product and Get Extra <IndianRupee size={12} /> Off on Select Room Heaters <b style={{ color: 'blue' }}>T&C</b></p>




                            <div className='d-flex w-100 my-4' style={{ flexWrap: 'wrap', }}>
                                <div style={{ color: 'gray', width:'15vh'}}>Storage</div>
                                <div  ><b>{item.storage}</b></div>
                            </div>

                            <div className='d-flex w-100' style={{ flexWrap: 'wrap', }}>
                                <div style={{ color: 'gray', width:'15vh'}}>Highlights</div>
                                <div >

                                    <ul style={{ listStyle: 'disc', display: "block" }}>
                                        <li>{item.RAM} GB RAM | {item.storage} GB ROM</li>
                                        <li>{item.display}</li>
                                        <li>{item.camera}</li>
                                        <li>{item.battery}</li>
                                        <li>{item.processor}</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2>Specifications</h2>
                                <div className='d-flex w-100 my-4' style={{ flexWrap: 'wrap', }}>
                                    <div style={{ color: 'gray', width:'15vh'}}>In The Box</div>
                                    <div  >{item.inTheBox}</div>
                                </div>
                                <div className='d-flex w-100 my-4' style={{ flexWrap: 'wrap', }}>
                                    <div style={{ color: 'gray', width:'15vh'}}>Model Number</div>
                                    <div  >{item.modelNumber}</div>
                                </div>
                                <div className='d-flex w-100 my-4' style={{ flexWrap: 'wrap', }}>
                                    <div style={{ color: 'gray', width:'15vh'}}>Model Name</div>
                                    <div  >
                                        {item.modelName}</div>
                                </div>
                                <div className='d-flex w-100 my-4' style={{ flexWrap: 'wrap', }}>
                                    <div style={{ color: 'gray', width:'15vh'}}>Browse Type</div>
                                    <div  >{item.category}</div>
                                </div>
                                <div className='d-flex w-100 my-4' style={{ flexWrap: 'wrap', }}>
                                    <div  style={{ color: 'gray', width:'15vh'}}>SIM Type</div>
                                    <div>{item.SIMType}</div>
                                </div>
                            </div>


                            <RatingAndReview />
                           
                        </div>
                    ))
                }
            </div>
          
        </div>
    );
};

export default AboutProduct;
