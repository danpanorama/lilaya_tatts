import { Carousel } from 'react-carousel-minimal';
import Image1 from '../../images/luluimage/lulu1.jpeg'
import Image2 from '../../images/luluimage/lulu2.jpeg'
import Image3 from '../../images/luluimage/lulu3.jpeg'
import Image4 from '../../images/luluimage/lulu4.jpeg'
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
         image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
         caption: "Scotland"
       },
       {
         image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
         caption: "Darjeeling"
       },
       {
         image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
         caption: "San Francisco"
       },
       {
         image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
         caption: "Scotland"
       },
       {
         image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
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
           <div style={{
             padding: "0 20px"
           }}>
             <Carousel
               data={data}
               time={2000}
            className='caruselTest'
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