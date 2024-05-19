import '../../App.css';
import '../../css/btn.css';
import Skatch from '../../images/luluimage/tatts/skitsa1.jpeg'
import Skatch2 from '../../images/luluimage/tatts/newbool.png'

function AboutSec(props) {
  return (
    <div className='flex rowToCol   margin_Top100'>
        <div className="worksSkitsa ">
            <h1 className='aboutHeader cg'>LIL AYA TATTOO</h1>
            <p className="cr smallText aboutTextHeader">
                TEL-AVIV 
            </p>
            <p className="smallText textLong ">
            lil aya tattoos its a art gallery in tel aviv from 1997 until now,
            we make tattoos and nails done in the salon nice fineline art involv
            with pure mide set idea that make any tattoo come great lil aya
            </p>
            <button className="btn margin_Top50">
                WhatsApp
            </button>
        </div>
        <div className="sketch image_div_about ">
            <img src={Skatch2} alt="" className="img " />

        </div>
    
    </div>
  ); 
}

export default AboutSec;
