import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const MyCarousel = () => {
  return (  



      <Carousel showArrows={false} showThumbs={false} autoPlay interval="5000" infiniteLoop className="myCarousel"   >
        <div>
           <img  src="src\Image\Garage.png" alt="Blog Image" className='garageCls'/>
            <h3 className="allFor">Totul pentru masina ta</h3>
        </div>
        <div>
         <img  src="src\Image\Garage2.png" alt="Blog Image" className='garageCls'/>
          <h3 className="allFor2">Gata de reparat</h3>
         </div>
       </Carousel>

    
    

  );
};

export default MyCarousel;