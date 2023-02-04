import React from "react";

function Footer(){
    return(
        <section className="foot">
            <div className="container">
                <div className="foot-main">
                    <div className="foot-1">
                        <h1>EstateAgency</h1>
                        
                        <p>Phone .<sapn>contact@example.com</sapn></p>
                         <p>Email .<span>+54 356 945234</span></p>
                    </div>
                    <div className="foot-2">
                        <h1>The Company</h1>
                        <span className="foot-icon"><iconify-icon icon="ic:sharp-chevron-right"></iconify-icon></span><span className="foot-co"> Site Map</span><br></br>
                        <span className="foot-icon"><iconify-icon icon="ic:sharp-chevron-right"></iconify-icon></span><span  className="foot-co">  Legal</span><br></br>
                        <span className="foot-icon"><iconify-icon icon="ic:sharp-chevron-right"></iconify-icon></span><span  className="foot-co">  Agent Admin</span><br></br>
                        <span className="foot-icon"><iconify-icon icon="ic:sharp-chevron-right"></iconify-icon> </span><span  className="foot-co"> Careers</span><br></br>
                        <span className="foot-icon"><iconify-icon icon="ic:sharp-chevron-right"></iconify-icon></span><span  className="foot-co">  Affiliate</span><br></br>
                        <span className="foot-icon"> <iconify-icon icon="ic:sharp-chevron-right"></iconify-icon></span> <span  className="foot-co"> Privacy Policy</span><br></br>
                    </div>

                    <div className="foot-3">
                        <h1>International sites</h1>
                        <span className="foot-icon"><iconify-icon icon="ic:sharp-chevron-right"></iconify-icon></span> <span  className="foot-co">Venezuela</span><br></br>
                        <span className="foot-icon"><iconify-icon icon="ic:sharp-chevron-right"></iconify-icon></span><span  className="foot-co"> China</span><br></br>
                        <span className="foot-icon"><iconify-icon icon="ic:sharp-chevron-right"></iconify-icon> </span><span  className="foot-co"> Hong Kong</span><br></br>
                        <span className="foot-icon"> <iconify-icon icon="ic:sharp-chevron-right"></iconify-icon></span><span  className="foot-co"> Argentina</span><br></br>
                        <span className="foot-icon"><iconify-icon icon="ic:sharp-chevron-right"></iconify-icon> </span><span  className="foot-co">Singapore</span><br></br>
                        <span className="foot-icon"><iconify-icon icon="ic:sharp-chevron-right"></iconify-icon> </span><span  className="foot-co">Philippines</span><br></br>

                    </div>


                </div>
            </div>

            <div className="last">
                <h6>@copyright<span className="last-sp"> EstateAgency</span>All Rights Reserved.</h6>
                <h6>Designed by<span> BootstrapMade</span></h6>
            </div>
        </section>

    )
}
export default Footer