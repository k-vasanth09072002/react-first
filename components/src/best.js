import React from "react";
import image from "./img/agent-1.jpg";
import image1 from "./img/agent-2.jpg";
import image2 from "./img/agent-3.jpg";


function Best(){
    return(
       <section className="bests">
            <div className="container">
                <h1>Best Agents</h1>
                <div className="best-main">
                    <div className="best-1">
                        <img src={image}></img>
                    </div>
                    <div className="best-1">
                        <img src={image1}></img>
                    </div>
                    <div className="best-1">
                        <img src={image2}></img>
                    </div>


                </div>
            </div>
       </section>
    )
}
export default Best