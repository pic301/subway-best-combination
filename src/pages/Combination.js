import React, { Component } from "react";
import "./Combination.css";
import order00 from "../images/combination/order00.png";
import order01 from "../images/combination/order01.png";
import order02 from "../images/combination/order02.png";
import order03 from "../images/combination/order03.png";
import order04 from "../images/combination/order04.png";
//빵
import Hati from "../images/recipes/Hati.jpg"
import Pamesan  from "../images/recipes/Pamesan.jpg"
import FlatBread from "../images/recipes/FlatBread.jpg"
import white  from "../images/recipes/white.jpg"
import wheat  from "../images/recipes/wheat.jpg"
import honeyOat from "../images/recipes/honeyOat.jpg"
// 토핑
import bacon from "../images/recipes/bacon.jpg"
import BaconBits from "../images/recipes/BaconBits.jpg"
import Shrimp  from "../images/recipes/Shrimp.jpg"
import EggMayo from "../images/recipes/EggMayo.jpg"
import Omelet  from "../images/recipes/Omelet.jpg"
import pepperoni from "../images/recipes/pepperoni.jpg"
//야채
import avocado  from "../images/recipes/avocado.jpg"
import lettuce  from "../images/recipes/lettuce.jpg"
import tomato  from "../images/recipes/tomato.jpg"
import cucumbers  from "../images/recipes/cucumbers.jpg"
import peppers  from "../images/recipes/peppers.jpg"
import onion  from "../images/recipes/onion.jpg"
import pickle  from "../images/recipes/pickle.jpg"
import olive  from "../images/recipes/olive.jpg"
import jalapenos  from "../images/recipes/jalapenos.jpg"
//치즈
import american from '../images/recipes/american.jpg'
import shredded from '../images/recipes/shredded.jpg'
import mozzarella from '../images/recipes/mozzarella.jpg'
//소스
import redwine from '../images/recipes/redwine.jpg'
import oliveOil from '../images/recipes/oliveOil.jpg'
import italian from '../images/recipes/italian.jpg'
import ililand from '../images/recipes/ililand.jpg'
import hol from '../images/recipes/hol.jpg'
import mustard from '../images/recipes/mustard.jpg'
import chipotle from '../images/recipes/chipotle.jpg'
import HotChilli from '../images/recipes/HotChilli.jpg'
import sweetChilli from '../images/recipes/sweetChilli.jpg'
import honey from '../images/recipes/honey.jpg'
import Mayonnaise from '../images/recipes/Mayonnaise.jpg'
import bbq from '../images/recipes/bbq.jpg'
import salt from '../images/recipes/salt.jpg'
import pepper from '../images/recipes/pepper.jpg'
import ranchDressing from '../images/recipes/ranchDressing.jpg'
import sweetOnion from '../images/recipes/sweetOnion.jpg'













class Combination extends Component {
  state = {
    images: [order00, order01, order02, order03, order04],
    step: 0,
    materials:
    [
      ["화이트","파마산 오레가노","허니오트","하티","위트","플랫 브래드"],
      ["베이컨 비츠","쉬림프","에그마요","오믈렛","페퍼로니","베이컨"],
      ["양상추","토마토","오이","피망","양파","피클","올리브","할라피뇨","아보카도"],
      ["아메리칸 치즈", "슈레드 치즈", "모차렐라 치즈"],
      ["랜치드레싱","마요네즈","스위트 어니언","허니 머스타드", "스위트 칠리", "핫 칠리", "사우스 웨스트", "머스타드", "홀스래디쉬",
       "사우전 아일랜드 ","이탈리안 드레싱" ,"올리브오일", "레드와인식초" ,"소금", "후추", "스모크 바비큐"]
    ],
    combination:[],
    combinationImages:[],
    cardTitle:["빵 선택","추가토핑 선택","야채 선택","치즈 선택","소스 선택"],
    cardDesc:["매장에서 직접 구운 6가지 종류 중 고객님이 원하는 빵으로 추가비용없이 선택가능합니다.",
             " 나만의 메뉴를 더욱 풍성하게 즐기세요.","원하지 않는 야채는 뺴고 좋아하는 야채를 더하세요.",
             "풍미를 더해주는 치즈를 골라주세요.","오늘의 기분에 맞는 소스를 선택해주세요"
    ],
    recipeImages:{
      //빵
      "허니오트":honeyOat,
      "하티":Hati,
      "파마산 오레가노":Pamesan,
      "화이트":white,
      "플랫 브래드":FlatBread,
      "위트":wheat,
      //토핑
      "베이컨 비츠": BaconBits,
      "쉬림프": Shrimp,
      "에그마요": EggMayo,
      "오믈렛": Omelet,
      "페퍼로니": pepperoni,
      "베이컨": bacon,
      //야채
      "아보카도": avocado,
      "할라피뇨": jalapenos ,
      "올리브": olive ,
      "피클": pickle,
      "양파": onion,
      "피망": peppers ,
      "양상추": lettuce ,
      "토마토": tomato ,
      "오이": cucumbers ,
      //치즈
      "아메리칸 치즈": american ,
      "슈레드 치즈": shredded ,
      "모차렐라 치즈": mozzarella ,
      //소스
      "랜치드레싱":ranchDressing,
      "마요네즈":Mayonnaise,
      "스위트 어니언":sweetOnion,
      "허니 머스타드": honey, 
      "스위트 칠리":sweetChilli,
      "핫 칠리":HotChilli, 
      "사우스 웨스트":chipotle, 
      "머스타드":mustard, 
      "홀스래디쉬":hol,
      "사우전 아일랜드 ":ililand,
      "이탈리안 드레싱": italian,
      "올리브오일":oliveOil, 
      "레드와인식초": redwine,
      "스모크 바비큐": bbq,
      "소금": salt, 
      "후추": pepper, 
    
    
    
  }

  
      
    
    
}
  nextStep = () => {
  
    if( this.state.step > 3){
      this.setState({ step: 0})
    } else{
      this.setState({ step: this.state.step + 1})
    }
    console.log(this.state.step);
  };
  prevStep = () => {
    this.state.step === 0     
    ?this.setState({ step: 4})
    :this.setState({ step: this.state.step - 1 });
    console.log(this.state.step);
  };
  onClick = (e) => {
    this.setState({combination:this.state.combination.concat(e.target.name)})
    this.setState({combinationImages:this.state.combinationImages.concat(this.state.recipeImages[e.target.name])})
    console.log(this.state.combinationImages)
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
                <button className="btn btn-recipe"key={index} name={item} onClick={this.onClick}>{item}</button>
              )}
              <div className="step-card-left">
                <div className="card-recipe">
                {this.state.combination.map(item => <div className="card-recipe-item">{item}</div>)
                  }
                
                </div>
              </div>
              <div className="step-card-right">
                <div className="step-number">
                {`step0${this.state.step+1}`}
                </div>
                <div className="step-menu">
                  <strong>
                  {this.state.cardTitle[this.state.step]}
                  </strong>
                </div>
                <div className="step-desc">
                  {this.state.cardDesc[this.state.step]}
                </div>
              </div>
            </div>
            <button className="btn btn-prev" onClick={this.prevStep}>이전</button>
            <button className="btn btn-next"onClick={this.nextStep}>다음</button>
          </div>
          {this.state.combinationImages.map((item,index)=>
              <img className="step-cover" src={item} alt=""/>
          )}
               
        </div>
      </div>
    );
  }
}

export default Combination;
