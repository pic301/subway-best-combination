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
    sandwichImagesIndex: 0
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
        <div className="btn_direction">
          <div>
          <img
            src={this.state.sandwichImages[[this.state.sandwichImagesIndex]]}
            alt=""
          />
         
          </div>
         
          <button className="btn btn_left" onClick={this.prevImage}>
            prev
          </button>
          <button className="btn btn_right" onClick={this.nextImage}>
            next
          </button>
        
        </div>
        <p>
          촉촉한 바비큐 치킨의 풍미가득.
          <br />
          손으로 찢어 더욱 부드러운 치킨의 혁명
        </p>
      </div>
    );
  }
}
export default Slider;
