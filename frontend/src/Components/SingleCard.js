import React from "react";
import { BookmarkPlus, IndianRupee, Star } from "lucide-react";
import { Link } from "react-router-dom";

const SingleCard = ({ product }) => {
    return (
        <div className=" mx-2 my-2" style={{flexGrow:1}}>
            <div className="card border-0 rounded-3 shadow card-shadow p-3" style={{ width: '15rem'}}>
                <div style={{ width: '100%', height: '150px', textAlign: 'center' }} >
                    <img style={{ width: '150px', height: '150px' }} src={product.imageUrl} className="card-img-top rounded-0 product-image" alt="..." />
                </div>
                <div className="card-body mt-3 mb-3">
                    <div className="row">
                        <div className="col-10">
                            <h4 className="card-title">Product title</h4>
                            <p className="card-text">
                                <Star color="green" fill="Green" size={25} />
                                <Star color="green" fill="Green" size={25} />
                                <Star color="green" fill="Green" size={25} />
                                <Star color="green" fill="Green" size={25} />
                                <Star color="green" fill="Green" size={25} />
                            </p>
                        </div>
                        <div className="col-2">
                            <BookmarkPlus size={40} />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center text-center g-0">
                    <div className="col-4">
                        <h5><IndianRupee />121259</h5>
                    </div>
                    <div className="col-8">
                        <Link to="#" className="btn btn-dark w-100 p-2 rounded-0 text-warning">ADD TO CART</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleCard;