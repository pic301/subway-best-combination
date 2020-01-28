// =========================
//    IMPORT DEPENDENCIES
// =========================
import React, { Component } from "react";

import "./Home.css";
import HomeLayout from '../components/HomeLayout'
import Slider from "../components/Slider";
import MainImage1 from "../images/common/1.jpg";
import MainImage2 from "../images/common/2.jpg";

// =========================
//     MaterialUI
// =========================
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const MainImage = [MainImage1, MainImage2];

class Home extends Component {
  state = {
    menus: ["메뉴소개", "이용방법", "새소식", "써브웨이", "가맹점"],
    items: [
      "샌드위치",
      "서브웨이 이용방법",
      "이벤트 프로모션",
      "써브웨이 역사",
      "써브웨이 프렌차이즈"
    ],
    anchorEl: null,
    currentImage: 0
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    this.setState({ anchorEl: null });
    console.log(event.target);
  };
  componentDidMount() {
    setInterval(
      () =>
        this.state.currentImage === 0
          ? this.setState({ currentImage: 1 })
          : this.setState({ currentImage: 0 }),
      4000
    );
  }
  render() {
    return (
      <>
        <div className="header">
          <HomeLayout/>
          <Toolbar className="header-nav">
            {this.state.menus.map((menu, i) => (
              <>
                <Button key={i} id="nav_btn" onClick={this.handleClick}>
                  {menu}
                </Button>
                <Menu
                  anchorEl={this.state.anchorEl}
                  open={Boolean(this.state.anchorEl)}
                  onClose={this.handleClose}
                >
                  {this.state.items.map(item => (
                    <MenuItem>{item}</MenuItem>
                  ))}
                </Menu>
              </>
            ))}
          </Toolbar>
        </div>
        

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
                  <a href="##">
                    <strong>매장찾기</strong>
                  </a>
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
              <h2>Subway's Best Combination Top 8</h2>
            </div>
          </div>
          <div className="slider_wrapper">
            <Slider />
          </div>
        </div>
        <div className="footer">footer</div>
        
      </>
    );
  }
}

export default Home;
