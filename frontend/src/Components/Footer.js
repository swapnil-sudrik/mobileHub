
import { ShieldPlus } from "lucide-react";
import React from "react";

const Footer = () => {
    return (
        <div className="bg-dark text-light footer">
            <div className="app-name ms-5 pt-3">
                <h5 className="name">MobileHub</h5>
                <p className="lh-1 sub-name ms-2"><b style={{ color: 'gray' }}>Explore</b> <b className="plus-name">Plus <ShieldPlus size={12} /></b> </p>
            </div>
            <hr/>
            <div className="d-flex" style={{ flexWrap: 'wrap' }}>


                <div style={{ flexGrow: 1 }}>
                    <p>ABOUT</p>

                    <h6>Contacts Us</h6>
                    <h6>About Us</h6>
                    <h6>Careers</h6>
                    <h6>MobileHub Strories</h6>
                    <h6>Press</h6>
                    <h6>MobileHub Wholesale</h6>
                </div>
                <div style={{ flexGrow: 1 }}>
                    <p>HELP</p>

                    <h6>Payments</h6>
                    <h6>Shipping</h6>
                    <h6>Cancellation & Returns</h6>
                    <h6>FAQ</h6>
                    <h6>Report Infringement</h6>
                </div>
                <div style={{ flexGrow: 1 }}>
                    <p>CONSUMER POLICY</p>

                    <h6>Cancellation & Returns</h6>
                    <h6>Terms Of Use</h6>
                    <h6>Security</h6>
                    <h6>Privacy</h6>
                    <h6>Sitemap</h6>
                    <h6>Grievance Redressal</h6>
                    <h6>EPR Compliance</h6>
                </div>
                <div style={{ flexGrow: 1 }}>
                    <p>SOCIAL</p>

                    <h6>Facebook</h6>
                    <h6>Twitter</h6>
                    <h6>YouTube</h6>
                </div>
            </div>
        </div>
    )
}
export default Footer;