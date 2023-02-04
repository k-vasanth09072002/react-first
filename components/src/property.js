import React from "react";
import image from "./img/property-1.jpg";
import image1 from "./img/property-2.jpg";
import image2 from "./img/property-4.jpg";
function Property(){
    return(
     <section className="proper">
        <div className="container">
            <h1 className="proper-h1">Latest Properties</h1>

            <div className="proper-main">

                <div className="pro-1">
                     <img src={image}></img>  
                     <div className="pros-con">
                        <h1>204 mount</h1>
                         <h1>OLIVE ROAD TWO</h1>
                        <button className="pro-but"> rend$405</button>

                     </div>
                </div>

                <div className="pro-1">
                     <img src={image1}></img> 

                     <div className="pros-con">
                        <h1>154 WEST</h1>
                         <h1>CENTRAL PARK</h1>
                        <button className="pro-but"> rend$405</button>

                     </div> 
                </div>

                <div className="pro-1">
                     <img src={image2}></img>  

                     <div className="pros-con">
                        <h1>204 MOUNT</h1>
                         <h1>SOUNTH BALA TWO</h1>
                        <button className="pro-but"> rend$405</button>

                     </div>
                </div>

            </div>
        </div>
     </section>
    )
}
export default Property