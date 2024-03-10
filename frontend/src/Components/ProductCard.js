import React, { useEffect, useState } from "react";
import { MobileData } from "../MobileData";
import A from "./A";

const ProductCard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the MobileData module
        const fetchData = () => {
            const mobileData = MobileData.getmobileData();
            setData(mobileData);
        };

        fetchData();
    }, []);

    const firstFiveItems = data.slice(0, 7);


    return (
        <div>



            <div className="mt-3 w-100" style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#fff', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                {firstFiveItems.map((product, index) => (
                    <A p={product} key={index} />
                ))}
            </div>


            {/* <div className="d-flex">
            {data.map((item , index)=>(
                <SingleCard product={item} index={index}/>
            ))}
        </div> */}
            {/* <div className="mt-2" style={{height:'200px'}}>

                
            </div> */}

        </div>

    )
}
export default ProductCard;