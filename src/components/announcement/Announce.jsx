import React from 'react';
import banner_one from "./announceImages/banner-1.png"
import banner_two from "./announceImages/banner-2.png"
import banner_three from "./announceImages/banner-3.jpg"
import "./announce.css"


const Announce = () => {
    return (
        <>
            <section className="annouc background">
                <div className="container d-flex">
                    <div className="img img-left">
                        <img  src={banner_one} alt="banners" width={'100%'} height={'100%'}/>
                    </div>
                    <div className="img img-left">
                        <img  src={banner_three} alt="banners" width={'100%'} height={'100%'}/>
                    </div>
                    <div className="img img-right">
                        <img i src={banner_two} alt="banners" width={'100%'} height={'100%'}/>
                    </div>
                </div>
            </section>  
        </>
    );
}

export default Announce;
