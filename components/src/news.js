import React from "react";
import image from "./img/post-1.jpg";
import image1 from "./img/post-2.jpg";
import image2 from "./img/post-3.jpg";

function News(){
    return(
        <section className="newss">
            <div className="container">
                <h1 className="new-h1">Latest News</h1>

                <div className="news-main">
                    <div className="news-1">
                        <img src={image}></img>
                        <div className="news-im">
                            <button className="news-but">PARK</button><br></br>
                            <a href="#">PARK IS COMMING </a><br></br>
                            <a href="#">NEW</a>
                            <p>18 sep 2017</p>
                        </div>

                    </div>

                    <div className="news-1">
                        <img src={image1}></img>
                        <div className="news-im">
                            <button className="news-but"> house</button><br></br>
                            <a href="#">HOUSE IS COMMING </a><br></br>
                            <a href="#">NEW</a>
                            <p>18 sep 2017</p>
                        </div>


                    </div>

                    <div className="news-1">
                        <img src={image2}></img>

                        <div className="news-im">
                            <button className="news-but">travals</button><br></br>
                            <a href="#">TRAVALS IS COMMING </a><br></br>
                            <a href="#">NEW</a>
                            <p>18 sep 2017</p>
                        </div>


                    </div>

                </div>


            </div>
        </section>
    )
}

export default News