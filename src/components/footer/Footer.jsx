import "../../App.css";
import "../../css/footer.css";
import SocialLinks from "../buttons/SocialLinks";
import Logo from "../logo/Logo";

function Footer() {
  return (
    <div className="footer  ">
      <div className="upperFooter">
        <div className="container_home   flex rowToCol  evenly acenter marginAuto h100 ">
          
        <iframe src="https://maps.app.goo.gl/WbULixaHJUdHfQpR7 " className="iframeMap" width="40%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          <div className="flex col headerDivsFooter position_relative">
            <p className="textFooterPosition">Street</p>
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
