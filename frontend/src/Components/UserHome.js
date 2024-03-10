import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import ProductsScroller from "./ProductsScroller";
import Footer from "./Footer";
import AllProductView from "./AllProductView";
import SpinningOfferCard from "./SpinningOfferCard";
import EMIOffers from "./EMIOffers";
import yesbank from '../images/yesbank.jpg'
import topDeals from '../images/topdeals.jpg'
import idfc from '../images/idfc.jpg'
import budget from '../images/budget smartphones.jpg'
import baroda from '../images/baroda.jpg'
import onecard from '../images/onecard.jpg'
import midrange from '../images/midrange Smartphones.jpg'
import premimum from '../images/premium smartphones.jpg'
import AboutProduct from "./AboutProduct";
import ItemsScroller from "./ItemsScroller";
import TopDealsProduct from "./TopDeals";
import BudgetPhonesView from "./BudgetPhones";
import MidRangePhonesView from "./MidRangePhonesView";
const UserHome = ()=>{
     
    return(
        <div>
            <Navbar/>


            <ProductsScroller />
            {/* <ProductCard/> */}
            <ItemsScroller />
            <SpinningOfferCard />
            <EMIOffers img={yesbank} />
            <EMIOffers img={idfc} />
            <EMIOffers img={topDeals} />

           <TopDealsProduct />

            <EMIOffers img={budget} />
            <EMIOffers img={baroda} />

           <BudgetPhonesView />
            <EMIOffers img={onecard} />
            <EMIOffers img={midrange} />
         <MidRangePhonesView />
            {/* <EMIOffers img={premimum} />
            <TopDealsProduct /> */}

            {/* <AllProductView /> */}
            <Footer />
        </div>
      
    )
}

export default UserHome;