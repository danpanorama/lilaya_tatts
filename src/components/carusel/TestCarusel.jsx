import { Carousel } from 'react-carousel-minimal';
import Image1 from '../../images/luluimage/lulu1.jpeg'
import Image2 from '../../images/luluimage/lulu2.jpeg'
import Image3 from '../../images/luluimage/lulu3.jpeg'
import Image4 from '../../images/luluimage/lulu4.jpeg'
import Image5 from '../../images/luluimage/tatts/tatt1.jpeg'
import Image6 from '../../images/luluimage/tatts/tatt2.jpeg'
import Image7 from '../../images/luluimage/tatts/tatt3.jpeg'
import Image8 from '../../images/luluimage/tatts/tatt4.jpeg'
import Image9 from '../../images/luluimage/tatts/tatt5.jpeg'
import Image10 from '../../images/luluimage/tatts/tatt6.jpeg'
import Image11 from '../../images/luluimage/tatts/tatt7.jpeg'
import Image12 from '../../images/luluimage/tatts/tatt8.jpeg'

function TestCarusel() {
    const data = [
       {
         image: Image1,
         caption: "lulu tattoo"
       },
       {
         image: Image2,
         caption: "lulu tattoo"
       },
       {
         image: Image3,
         caption: "lulu tattoo"
       },
       {
         image: Image4,
         caption: "lulu tattoo"
       },
       {
         image: Image5,
         caption: "Scotland"
       },
       {
         image: Image6,
         caption: "Darjeeling"
       },
       {
         image:Image7,
         caption: "San Francisco"
       },
       {
         image: Image8,
         caption: "Scotland"
       },
       {
         image: Image9,
         caption: "Darjeeling"
       }
     ];
   
     const captionStyle = {
       fontSize: '2em',
       fontWeight: 'bold',
     }
     const slideNumberStyle = {
       fontSize: '20px',
       fontWeight: 'bold',
     }
     return (
       <div className="galleryMaxImage">
         <div style={{ textAlign: "center" }}>
           <div 
          
             >
             <Carousel
               data={data}
               time={2000}
            className='caruselTest'
               width='100%'
               captionStyle={captionStyle}
               radius="10px"
               slideNumber={true}
               slideNumberStyle={slideNumberStyle}
               captionPosition="bottom"
               automatic={true}
               dots={true}
               pauseIconColor="white"
               pauseIconSize="40px"
               slideBackgroundColor="darkgrey"
               slideImageFit="cover"
               thumbnails={true}
               thumbnailWidth="100px"
               style={{
                 textAlign: "center",
                 maxWidth: "850px",
                 maxHeight: "500px",
                 margin: "40px auto",
               }}
             />
           </div>
         </div>
       </div>
     );
   }
   
   export default TestCarusel;