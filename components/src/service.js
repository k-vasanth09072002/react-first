import React from "react";


function Service(){
    return(
        <section className="services">
            <div className="container"> 
                <h1 className="ser-h1">Our Services</h1>
                    <div className="ser-main">
                            <div className="ser-1">
                                <div className="ser">
                                <span className="ser-icon"><iconify-icon icon="vaadin:user-card"></iconify-icon></span>
                                    <span className="ser-icon2">life </span>
                                </div>
                                    <p>Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi</p>
                    
                                


                            </div>

                            <div className="ser-2">
                                <div className="ser">
                                <span className="ser-icon"><iconify-icon icon="uit:calender"></iconify-icon></span>
                                    <span className="ser-icon2">loan</span>
                                    </div>   
                                    <p className="ser-p">Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                                
                            </div>

                            <div className="ser-3">
                                <div className="ser">
                                <span className="ser-icon"><iconify-icon icon="bi:card-checklist"></iconify-icon></span>
                                    <span className="ser-icon2">sell</span>
                                    </div>
                                    
                                    <p>Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>

                               
                            </div>
                    </div>
            </div>
        </section>
    )

}
export default Service