import '../../App.css';
import '../../css/btn.css';

function SocialLinks() {
  return (
    <div className="socialBtn flex row center  ">
      <div className="SocialCircle  flex col center"><li className="fa fa-facebook"></li></div>
      <div className="SocialCircle  flex col center"><li className="fa fa-twitter"></li></div>
      <div className="SocialCircle  flex col center"><li className="fa fa-instagram"></li></div>
      <div className="SocialCircle  flex col center"><li className="fa fa-tikTok"></li></div>

    </div>
  );
}

export default SocialLinks;
