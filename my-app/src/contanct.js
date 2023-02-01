import React from "react";
import image from "./img/js-removebg-preview.png";

function Contanct(){
    return (
        <section className="backgrouns">
        <div className="container">
                <div className="con-main">
                    <div className="cont-1">
                         <img src={image}></img>
                    </div>
                        <h1 className="h1">k.vasanth</h1>
                        <p className="dev">Front-end-developer</p>
                </div>
            <div className="cont-1">
                <h1 className="hlo">Hello!</h1>
                <h3 className="what">Here's who I am & What I do</h3>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
              
                <div className="btn">
                    <button>click here</button>

                </div>
            </div>
        </div>
    </section>
    )
}

export default Contanct