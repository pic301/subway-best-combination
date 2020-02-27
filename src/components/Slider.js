import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    starNumber: [30, 40, 45, 40, 45, 50, 35, 30]
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

  };

  render() {
    return (
      <div>
        <div className="main-slider">
          <div className="slider-content">
            <div
              className="slider-cover-container"
            >
              <button className="btn btn_left" onClick={this.prevImage}>
                prev
              </button>
              <img
                className="slider-cover"
                src={
                  this.state.sandwichImages[[this.state.sandwichImagesIndex]]
                }
                alt=""
              />
              <button className="btn btn_right" onClick={this.nextImage}>
                next
              </button>
              <div
                className="slider-container"
              >
                <div className="slider-title">
                  {this.props.sliderTitle[this.state.sandwichImagesIndex]}
                </div>
                <div
                  className={`star s${
                    this.state.starNumber[this.state.sandwichImagesIndex]
                  }`}
                ></div>
                  <Link
                    className="btn-link"
                    to={`/detail/${this.state.sandwichImagesIndex}/${
                      this.props.sliderTitle[this.state.sandwichImagesIndex]
                    }/${
                      this.props.sandwichDesc[this.state.sandwichImagesIndex]
                    }`}
                  >
                <button className="btn btn_detail">
                    상세보기
                </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="slider-desc">
          {this.props.sandwichDesc[this.state.sandwichImagesIndex]}
        </p>
      </div>
    );
  }
}
export default Slider;
