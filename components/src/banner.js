import React from "react";
import image from"./img/slide-1.jpg";
function Banner(){
    return(
        <section className="ben">
         <div className="ben-image">
              <img src={image}></img>
                {/* <div className="bann">
                    <h1 className="ban-h1">Doral,Floria<br></br>78345</h1>
                    <h1 className="ban-h11"><span>204</span>MOUNT <br></br>OLIVE ROAD TWO</h1>
                </div> */}
                <div className="benn">

                    <h1><span className="spans">204</span>MOUNT</h1>
                    <h1>OLIVE ROAD TWO</h1>

                    <a href="#">RENT $450</a>

                </div>
         </div>

        </section>
    )

}


export default Banner