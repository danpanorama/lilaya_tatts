import '../../App.css';
import '../../css/home.css';
import '../../css/headers.css'

function BigHeader(props) {
  return (
    <div className={props.class}>

<h1 className="headerBig">{props.header} <br/>{props.header2}</h1>
    </div>
  );
}

export default BigHeader;
