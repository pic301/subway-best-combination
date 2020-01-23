import React, { Component } from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class Home extends Component {
  state = {
    menus: ["메뉴소개", "이용방법", "새소식", "써브웨이", "가맹점"],
    items:["샌드위치","서브웨이 이용방법","이벤트 프로모션","써브웨이 역사" , "써브웨이 프렌차이즈"],
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    this.setState({ anchorEl: null });
    console.log(event.target);
  };
  render() {
    return (
      <>
        <div className="header">
          <div className="header-content clearfix">
            <div className="header-logo">
              <a href="#sdf">subway</a>
            </div>

            <ul className="header-menu ">
              <li>
                <a href="#a">매장찾기</a>
              </li>
              <li>
                <a href="#a">가맹신청ㆍ문의</a>
              </li>
              <li>
                <a href="#a">고객센터</a>
              </li>
              <li>
                <a
                  className="global_subway"
                  href="http://www.subway.com/en-us/exploreourworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Global Subway"
                >
                  Global Subway
                </a>
              </li>
            </ul>
          </div>
          <Toolbar className="header-nav">
            {this.state.menus.map((menu, i) => (
             <>
              <Button key={i} id="nav_btn" onClick={this.handleClick}>
                {menu}
              </Button>
              <Menu
                 anchorEl={this.state.anchorEl}
                 open={Boolean(this.state.anchorEl)}
                 onClose={this.handleClose}>
                   {this.state.items.map(item =>
                       <MenuItem >
                            {item}
                       </MenuItem>)
                   }
              </Menu>
             </>
            ))}
          </Toolbar>
        </div>
        <div></div>

        <div className="main">main</div>
        <div className="section">section</div>
        <div className="footer">footer</div>
      </>
    );
  }
}

export default Home;
