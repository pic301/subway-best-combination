// =========================
//    IMPORT DEPENDENCIES
// =========================
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import fire from "../components/firebaseConfig";
import GridImages from "../components/GridImages";

import "./Home.css";
import Slider from "../components/Slider";
import MainImage1 from "../images/common/1.jpg";
import MainImage2 from "../images/common/2.jpg";
import combination from "../images/common/combination.png";
import Youtube from "../components/Youtube";
import Bar from "../components/bar";

// =========================
//     MaterialUI
// =========================
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";

const MainImage = [MainImage1, MainImage2];

class Home extends Component {
  state = {
    sandwichDesc: [
      "오븐에 구워 담백한 저칼로리 닭가슴살의 건강한 풍미",
      "담백한 터키와 바삭한 베이컨의 기분 좋은 만남",
      "육즙이 쫙~풍부한 비프 스테이크의 풍미가 입안 한가득",
      "담백한 터키와 바삭한 베이컨 환상조합에 부드러운 아보카도는 신의 한수",
      "바삭한 베이컨과 담백한 치킨의 이중주",
      "자신있게 추천하는 터키, 햄, 베이컨의 완벽한 맛의 밸런스",
      "살라미, 페퍼로니가 입안 한가득! 쏘 핫한 이탈리아의 맛",
      "담백한 치킨 스트립에 달콤짭쪼름한 써브웨이 특제 데리야끼 소스와의 환상적인 만남"
    ],

    sliderTitle: [
      "로스트 치킨",
      "터키베이컨",
      "스테이크&치즈",
      "터키 베이컨 아보카도",
      "치킨 베이컨 랜치",
      "써브웨이 멜트",
      "스파이시 이탈리안",
      "치킨 데리야끼"
    ],
    menus: [
      { name: "메뉴소개", items: [1] },
      { name: "이용방법", items: [2] },
      { name: "새소식", items: [3] },
      { name: "가맹점", items: [4] },
      { name: "써브웨이", items: [5] }
    ],

    anchorEl: null,
    currentImage: 0,
    open: false,
    hover: false
  };
  _logout = () => {
    fire.auth().signOut();
    localStorage.removeItem("user");
    localStorage.removeItem("name");
  };
  _logIn = () => {
    this.props.history.push("/login");
  };
  handleClick = e => {
    this.setState({ anchorEl: e.currentTarget });

    console.log(this.state.anchorEl);
  };

  handleClose = e => {
    this.setState({ anchorEl: null });
    console.log(e.target);
  };
  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.state.currentImage === 0
          ? this.setState({ currentImage: 1 })
          : this.setState({ currentImage: 0 }),
      6000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  _onMouseEnter = () => {
    this.setState({ hover: true });
  };
  _onMouseLeave = () => {
    this.setState({ hover: false });
  };
  handlerQuestion = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    console.log(this.state.open);
    return (
      <>
        <div className="header">
          {!localStorage.name ? (
            ""
          ) : localStorage.name && localStorage.name !== "null" ? (
            <p className="header-username">
              {" "}
              {`${localStorage.name}님 반갑습니다`}
            </p>
          ) : (
            <p className="header-username"> {`익명님 반갑습니다`}</p>
          )}
          {localStorage["user"] && localStorage["user"] ? (
            <button className="btn_logout" onClick={this._logout}>
              로그아웃
            </button>
          ) : (
            <button className="btn_logout" onClick={this._logIn}>
              로그인
            </button>
          )}
        </div>
        <div className="l_wrapper">
          <div className="main">
            <div className="main-wrapper">
              <img
                className="main-cover"
                src={MainImage[this.state.currentImage]}
                alt=""
              />
              <div>
                <div className="quick_link">
                  <div className="quick-content clearfix">
                    <div className="store">
                      <Link to="/store">
                        <strong>매장찾기</strong>
                      </Link>
                    </div>
                    <div
                      className="youtube"
                      onMouseEnter={this._onMouseEnter}
                      onMouseLeave={this._onMouseLeave}
                    >
                      {this.state.hover === true ? (
                        <a href="https://youtu.be/ZR1smxzfu90">
                          <strong>꿀조합 Full영상 보러가기</strong>
                          <Youtube />
                        </a>
                      ) : (
                        <a href="https://youtu.be/ZR1smxzfu90">
                          <strong>꿀조합 영상 보러가기</strong>
                        </a>
                      )}
                    </div>

                    <div className="franchise clearfix">
                      <Link to="/franchiseInquiry">
                        <strong>꿀조합신청ㆍ문의</strong>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <div className="section-wrapper-right">
                <h2 className="section-mystore">
                  <span>나만의</span>
                  <span>꿀조합</span>
                </h2>
                <img src={combination} alt="" />
                <div className="section-mystore-make">
                  <Link className="btn-link" to={"/combination"}>
                    <button className="btn_mystore">만들러가기</button>
                  </Link>
                </div>
              </div>
              <div
                className="section-question"
                style={{ position: "relative" }}
              >
                <div>{this.state.open === true ? <Bar /> : ""}</div>
                <button className="btn_bar"
                  onClick={this.handlerQuestion}
                >
                  {this.state.open === true ? (
                    <Fab color="secondary" aria-label="add">
                      <CloseIcon />
                    </Fab>
                  ) : (
                    <Fab color="secondary" aria-label="add">
                      <QuestionAnswerIcon />
                    </Fab>
                  )}
                </button>
              </div>
              <div className="section-wrapper-left">
                <div
                >
                  <div className="section-title">
                    <h2 className="section-title-left">
                      Subway's Best Combination Top 8
                    </h2>
                  </div>
                  <div className="slider_wrapper">
                    <Slider
                      sandwichDesc={this.state.sandwichDesc}
                      sliderTitle={this.state.sliderTitle}
                    />
                  </div>
                </div>
                <div style={{ width: "60%" }}>
                  <GridImages
                    sandwichDesc={this.state.sandwichDesc}
                    sliderTitle={this.state.sliderTitle}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Home);
