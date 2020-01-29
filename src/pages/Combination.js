import React, { Component } from "react";
import "./Combination.css";
import order00 from "../images/combination/order00.png";
import order01 from "../images/combination/order01.png";
import order02 from "../images/combination/order02.png";
import order03 from "../images/combination/order03.png";
import order04 from "../images/combination/order04.png";


class Combination extends Component {
  state = {
    images: [order00, order01, order02, order03, order04],
    step: 0,
    materials:
    [
      ["화이트","파마산","오레가노","허니오트","하티","위트","플랫"],
      ["베이컨 비츠","쉬림프","에그마요","오믈렛","아보카도","페퍼로니","베이컨"],
      ["양상추","토마토","오이","피망","양파","피클","올리브","할라피뇨","아보카도"],
      ["아메리칸 치즈", "슈레드치즈", "모차렐라 치즈"],
      ["랜치드레싱","마요네즈","스위트 어니언","허니 머스타드", "스위트 칠리", "핫 칠리", "사우스 웨스트", "머스타드", "홀스래디쉬",
       "사우전 아일랜드 ","이탈리안 드레싱" ,"올리브오일", "레드와인식초" ,"소금", "후추", "스모크 바비큐"]
    ],
    combination:[]
  };
  nextStep = () => {
    // this.state.step > 4
    // ?this.setState({ step: this.state.step === 0})
    // :this.setState({ step: this.state.step + 1 });
    if( this.state.step > 3){
      this.setState({ step: 0})
    } else{
      this.setState({ step: this.state.step + 1})
    }
    console.log(this.state.step);
  };
  prevStep = () => {
    this.state.step === 0     
    ?this.setState({ step: 3})
    :this.setState({ step: this.state.step - 1 });
    console.log(this.state.step);
  };
  onClick = (e) => {
    this.setState({combination:this.state.combination.concat(e.target.name)})
    console.log(this.state.combination)
  }
  render() {
    return (
      <div className="combination">
        <div className="combination-wrapper">
          <div className="combination-content">
            <ul className="step">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
            <div className="step-content">
              <img src={this.state.images[this.state.step]} alt="" />
              {this.state.materials[this.state.step].map((item,index )=>
                <button key={index} name={item} onClick={this.onClick}>{item}</button>
              )}
              <div className="step-card">
                {this.state.combination}
              </div>
            </div>
            <button onClick={this.prevStep}>prev</button>
            <button onClick={this.nextStep}>next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Combination;
