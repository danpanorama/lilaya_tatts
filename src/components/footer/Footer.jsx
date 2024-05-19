import "../../App.css";
import "../../css/footer.css";
import SocialLinks from "../buttons/SocialLinks";
import Logo from "../logo/Logo";

function Footer() {
  return (
    <div className="footer  ">
      <div className="upperFooter"> 
        <div className="container_home   flex rowToCol  evenly acenter marginAuto h100 ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1690.7881852383282!2d34.768277307561426!3d32.05365619699422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca239c28cdf%3A0x4bd849232cde9743!2z16jXkdeg15Ug15fXoNeg15DXnCAxNCwg16rXnCDXkNeR15nXkS3Xmdek15U!5e0!3m2!1siw!2sil!4v1716125921015!5m2!1siw!2sil" className="iframeMap" width="40%" height="100%"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className="flex col headerDivsFooter position_relative">
            {/* <p className="textFooterPosition">Street</p> */}
          <h1 className="locationHeader">רבנו חננאל 14</h1>
            <h1 className="locationHeader">Rabeno Hananel 14</h1>
            <p className="sideTextFooter VerticalText cr">rabeno hananel 14</p>
          </div>
        </div>
      </div>
      <div className="lowerFooter flex evenly acenter rowToCol ">
      <form action="" className="form paddingTopBottom">
            <h1 className="formHeader">send me a text</h1>
            <input placeholder="hi, i want to order place" type="text" className="input" />
            <button className="btn footerBtn">send</button>
          </form>
          <br />
        <Logo /><br />
        <SocialLinks />
      </div>
    </div>
  );
}

export default Footer;
