import React from 'react';
import './wrapper.css'



    const data = [
      {
        cover: <i className='fa-solid fa-truck-fast'></i>,
        title: "Worldwide Delivery",
        decs: "We offer competitive prices on our 100 million plus product any range.",
      },
      {
        cover: <i className='fa-solid fa-id-card'></i>,
        title: "Safe Payment",
        decs: "We offer competitive prices on our 100 million plus product any range.",
      },
      {
        cover: <i className='fa-solid fa-shield'></i>,
        title: "Shop With Confidence ",
        decs: "We offer competitive prices on our 100 million plus product any range.",
      },
      {
        cover: <i className='fa-solid fa-headset'></i>,
        title: "24/7 Support ",
        decs: "We offer competitive prices on our 100 million plus product any range.",
      },
    ]



const Wrapper = () => {
    return (
        <>
            <section className="wrapper background">
                <div className="container grid2">
                    {
                        data.map((item, index)=> {
                            return(
                                <>
                                    <div className="product" key={index}>
                                        <div className="img icon-circle">
                                            <span className='wrapper_icon'>{item.cover}</span>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.decs}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default Wrapper;
