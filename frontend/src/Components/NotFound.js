import React from "react";
import notfound from '../images/error-page.png'
import { Link } from "react-router-dom";
import { ShieldPlus } from "lucide-react";

const NotFound = () => {
    return (
        <div>
            <div className="mt-3 w-100" style={{ textAlign: 'center', backgroundColor: 'white'}}>
                <div className="app-name p-2" style={{ alignItems: 'center', backgroundColor:"rgb(54, 54, 235)" }}>
                    <h5 className="name" style={{color:'white'}}>MobileHub</h5>
                    <p className="lh-1 sub-name ms-2"><b style={{ color: 'gray' }}>Explore</b> <b>Plus <ShieldPlus size={12} /></b> </p>
                </div>
              
                <img src={notfound} className="img-fluid" alt="dfd" style={{ maxWidth: '100%', height: 'auto' }} />

                <p style={{ fontSize: '20px' }}>Unfortunately the page you are looking for has been moved or deleted</p>

                <Link className="px-5" to="/" style={{ backgroundColor: 'blue', padding: '10px', textDecoration: "none", color: "white", fontWeight: 'bolder', borderRadius: '7px' }}>
                    Back to Home
                </Link>

            </div>
        </div>
    )
}

export default NotFound;