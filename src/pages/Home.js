// =========================
//    IMPORT DEPENDENCIES
// =========================
import React, { Component } from "react";
import { Link} from "react-router-dom";
import fire from "../components/firebaseConfig";


import "./Home.css";
import Slider from "../components/Slider";
import MainImage1 from "../images/common/1.jpg";
import MainImage2 from "../images/common/2.jpg";
import combination from "../images/common/combination.png";

// =========================
//     MaterialUI
// =========================

const MainImage = [MainImage1, MainImage2];

class Home extends Component {
  state = {
    menus: [
      {name:"메뉴소개",items:[1]}, 
      {name:"이용방법",items:[2]}, 
      {name:"새소식",items:[3]}, 
      {name:"가맹점",items:[4]}, 
      {name:"써브웨이",items:[5]}, 
  ],
   
    anchorEl: null,
    currentImage: 0,
    open: false
  };
  _logout = () => {
    fire.auth().signOut()
    this.props.history.push("/login")
  }
  handleClick = e => {
    this.setState({ anchorEl: e.currentTarget });
  
    console.log(this.state.anchorEl)
  };

  handleClose = e => {
    this.setState({ anchorEl: null });
    console.log(e.target);
  };
  componentDidMount() {
    this.interval =   setInterval(
      () =>
        this.state.currentImage === 0
          ? this.setState({ currentImage: 1 })
          : this.setState({ currentImage: 0 }),
      4000
    );
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }


  render() {
    return (
      <>
        <div className="header">
            { localStorage.name  && localStorage.name !== "null"
            ? <p className="header-username"> {`${localStorage.name}님 반갑습니다`}</p>
            : <p className="header-username"> {`익명님 반갑습니다`}</p>
            }
              <button className="btn_logout" onClick={this._logout}>로그아웃</button>
      
        </div>
        <div className="l_wrapper">
          <div className="main">
            <div className="main-wrapper">
              <img
                className="main-cover"
                src={MainImage[this.state.currentImage]}
                alt=""
              />
              <div className="quick_link">
                <div className="quick-content clearfix">
                  <div className="store">
                    <Link to="/store">
                      <strong>매장찾기</strong>
                    </Link>
                  </div>
                  <div className="youtube">
                    <a href="https://youtu.be/ZR1smxzfu90">
                      <strong>꿀조합 영상 보러가기</strong>
                    </a>
                  </div>

                  <div className="franchise clearfix">
                    <a href="##">
                      <strong>가맹신청ㆍ문의</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section-wrapper">
              <div className="section-title">
                <h2 className="section-mystore">
                  <span>나만의</span>
                  <span>꿀조합</span>
                </h2>
                <h2 className="section-title-left">
                  Subway's Best Combination Top 8
                </h2>
              </div>
              <img src={combination} alt="" />

              <div className="section-mystore-make">
                <button className="btn_mystore" >
                <Link className="btn-link"to={"/combination"}>만들러가기</Link>
                </button>
              </div>
            </div>
            <div className="slider_wrapper">
              <Slider />
            </div>
          </div>
        </div>
        <div className="footer">footer</div>
      </>
    );
  }
}

export default Home;
