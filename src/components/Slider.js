import React, { Component } from "react";
import "./Slider.css";

import sandwich_01 from "../images/menus/sandwich_01.jpg";
import sandwich_02 from "../images/menus/sandwich_02.jpg";
import sandwich_03 from "../images/menus/sandwich_03.jpg";
import sandwich_04 from "../images/menus/sandwich_04.jpg";
import sandwich_05 from "../images/menus/sandwich_05.jpg";
import sandwich_06 from "../images/menus/sandwich_06.jpg";
import sandwich_07 from "../images/menus/sandwich_07.jpg";
import sandwich_08 from "../images/menus/sandwich_08.jpg";

class Slider extends Component {
  state = {
    sandwichImages: [
      sandwich_01,
      sandwich_02,
      sandwich_03,
      sandwich_04,
      sandwich_05,
      sandwich_06,
      sandwich_07,
      sandwich_08
    ],
    sandwichImagesIndex: 0,
    sandwichDesc1: [
      "촉촉한 바비큐 치킨의 풍미가득.",
      "담백한 터키와 바삭한 베이컨의 기분 좋은 만남",
      "육즙이 쫙~풍부한 비프 스테이크의 풍미가 입안 한가득",
      "담백한 터키와 바삭한 베이컨 환상조합에 부드러운 아보카도는 신의 한수",
      "바삭한 베이컨과 담백한 치킨의 이중주",
      "자신있게 추천하는 터키, 햄, 베이컨의 완벽한 맛의 밸런스",
      "살라미, 페퍼로니가 입안 한가득! 쏘 핫한 이탈리아의 맛",
      "담백한 치킨 스트립에 달콤짭쪼름한 써브웨이 "
    ],
    sandwichDesc2: [
      "손으로 찢어 더욱 부드러운 치킨의 혁명",
      "",
      "",
      "",
      "",
      "",
      "",
      "특제 데리야끼 소스와의 환상적인 만남"
    ],
    sliderTitle:
      ["로스트 치킨",
      "터키베이컨",
      "스테이크&치즈",
      "터키 베이컨 아보카도",
      "치킨 베이컨 랜치",
      "써브웨이 멜트",
      "스파이시 이탈리안",
      "치킨 데리야끼",],
      starNumber:[
        30,40,45,40,45,50,35,30
      ]
  };
  nextImage = () => {
    const newIndex = this.state.sandwichImagesIndex + 1;
    if (newIndex > this.state.sandwichImages.length - 1) {
      this.setState({
        sandwichImagesIndex: 0
      });
    } else {
      this.setState({
        sandwichImagesIndex: newIndex
      });
    }
    console.log(this.state.sandwichImagesIndex);
  };
  prevImage = () => {
    const newIndex = this.state.sandwichImagesIndex - 1;
    if (newIndex < 0) {
      this.setState({
        sandwichImagesIndex: this.state.sandwichImages.length - 1
      });
    } else {
      this.setState({
        sandwichImagesIndex: newIndex
      });
    }

    console.log(this.state.sandwichImagesIndex);
    
  };

  render() {
    return (
      <div>
        <div className="main-slider">
          <div className="slider-content">
           
            <img
              src={this.state.sandwichImages[[this.state.sandwichImagesIndex]]}
              alt=""
            />
             <div className="slider-title">
                {this.state.sliderTitle[this.state.sandwichImagesIndex]}
           
            </div>
            <div className={`star s${this.state.starNumber[this.state.sandwichImagesIndex]}`}>
            
            </div>
          </div>

          <button className="btn btn_left" onClick={this.prevImage}>
            prev
          </button>
          <button className="btn btn_right" onClick={this.nextImage}>
            next
          </button>
          <p>
            {this.state.sandwichDesc1[this.state.sandwichImagesIndex]}
            <br />
            {this.state.sandwichDesc2[this.state.sandwichImagesIndex]}
          </p>
        </div>
      </div>
    );
  }
}
export default Slider;
