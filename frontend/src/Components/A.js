import React from "react";

const A = ({p})=>{
  return(
    <div className="m-3 px-4 py-3" style={{backgroundColor:'white' , border:'1px solid gray' , borderRadius:'8px', alignItems:'center'}}>
      <div className="w-100" style={{textAlign:'center'}}>
        <img src={p.imageUrl} alt="dfd" className="product-image" style={{width:'100px'}}/>
        <p className="mt-3 lh-1 m-0">{p.model}</p>
        <h6 className="lh-1">From {p.price}</h6>
      </div>

    </div>
  )
}

export default A;