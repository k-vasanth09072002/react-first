import React from "react";
import image from "./img/testimonial-2.jpg"
import image1 from "./img/testimonial-2.jpg"


function Test(){
    return(
       <section className="tests">

        <div className="container">
            <h1 className="test-h1">Testimonials</h1>
            <div className="test-main">
                <div className="test-1">
                    <img src={image}></img>
                </div>
                <div className="test-2">
                    <div className="texx">
                    <p class="testimonial-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium debitis hic ber quibusdam voluptatibus officia expedita corpori.</p>
                    </div>
                        <div className="texx-1">
                            <img src={image1}></img>
                            <span>Albert&Elrika</span>
                        </div>

                    </div>
            


                </div>


        </div>

       </section>
    )
}
export default Test