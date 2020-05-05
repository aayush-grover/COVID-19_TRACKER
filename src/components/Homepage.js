import React ,{Component} from 'react';
import './Homepage.css';
//import Boylogo from 'C:\Users\admin\Desktop\fsd\corona update\covid-19\src\images\boy.png';
//import CardDeck from 'react-bootstrap/CardDeck';
class Homepage extends Component {
  render(){
  return (
   <React.Fragment>
     <div className="row no-gutters">
       <div className="col-md-6 no-gutters">
       <div className="leftside">
       <img src={process.env.PUBLIC_URL + "/images/svgs/boy.png"} alt="Boy with mask" height="100%" width="100%" />
       </div>
    </div>
    <div className="col-md-6 no-gutters">
    <div className="rightside">

      <div className="heading">
             <h1><b className="fonts">STAY H<img
              src={process.env.PUBLIC_URL + "/images/svgs/virus.svg"}
              width="41"
              height="41"
              className="d-inline-block align-top imgheight"
              alt="React Bootstrap logo"
              />ME</b></h1>
      </div>

      <div className="grid">
        <div className="socialdistancing">
          <img src={process.env.PUBLIC_URL + "/images/svgs/social-distancing.png"} width="100%" height="80%" className="" alt="React Bootstrap logo" />
          <h6>maintain social distancing</h6>
        </div>
        <div className="homeimages">
        <img src={process.env.PUBLIC_URL + "/images/svgs/withmask.png"} width="80%" height="80%" className="d-inline-block align-top" alt="React Bootstrap logo" />
        <h6>wear face mask</h6>
        </div>
        <div className="homeimages">
        <img src={process.env.PUBLIC_URL + "/images/svgs/workfromhome.png"} width="80%" height="80%" className="d-inline-block align-top" alt="React Bootstrap logo" />
        <h6>work from home</h6>
        </div>
        <div className="homeimages">
        <img src={process.env.PUBLIC_URL + "/images/svgs/washhands.png"} width="80%" height="80%" className="d-inline-block align-top" alt="React Bootstrap logo" />
        <h6>wash hands often</h6>
        </div>
      </div>

       </div>
       </div>
   </div>
   </React.Fragment>
  );
}
}

export default Homepage;
