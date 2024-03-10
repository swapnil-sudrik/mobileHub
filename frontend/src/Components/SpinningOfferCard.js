
import React from 'react';
import emi from '../images/emi.gif'
import exchange from '../images/exchange.gif'
import latest from '../images/latest.gif'
import tranding from '../images/trending.gif'
import upgrade from '../images/upgrade5g.gif'

export default function SpinningOfferCard() {

    return (
        <div className='w-100 mt-3' style={{ display: 'flex', flexWrap: "wrap" , justifyContent:'center', backgroundColor:'#fff' }}>
            <div>
                <img src={upgrade} alt="dfd"  style={{ width: ' 200px' , padding:'10px' }} />
            </div>
            <div style={{ width: ' 200px' }}>
                <img src={tranding} alt="dfd"  style={{ width: ' 200px', padding:'10px'}} />
            </div>
            <div style={{ width: ' 200px' }}>
                <img src={emi} alt="dfd"  style={{ width: ' 200px' ,padding:'10px'}} />
            </div>
            <div style={{ width: ' 200px' }}>
                <img src={exchange} alt="dfd"  style={{ width: ' 200px',padding:'10px' }} />
            </div>
            <div style={{ width: ' 200px' }} >
                <img src={latest} alt="dfd"  style={{ width: ' 200px' ,padding:'10px'}} />
            </div>
        </div>
    )
}
