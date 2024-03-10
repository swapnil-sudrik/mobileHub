import React from "react";
import Navbar from "./Navbar";
import MyOrdersItems from "./MyOrdersItems";
import Footer from "./Footer";

const MyOrders = ()=>{
    return(
        <div>
            <Navbar />
            <MyOrdersItems/>
          
            <Footer />
        </div>
    )
}

export default MyOrders;