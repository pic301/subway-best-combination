import React, { Component } from "react";
import "./detail.css";
import HomeLayout from "../components/HomeLayout";
import CommentBox from '../components/Comment'

import cheese from '../images/recipes/cheese.jpg'
import chiken from '../images/recipes/chiken.jpg'
import sweetChilli from '../images/recipes/sweetChilli.jpg'
import honeyOat from '../images/recipes/honeyOat.jpg'
import ranchDressing from '../images/recipes/ranchDressing.jpg'
import salt from '../images/recipes/salt.jpg'
import pepper from '../images/recipes/pepper.jpg'
import avocado from '../images/recipes/avocado.jpg'
import jalapenos from '../images/recipes/jalapenos.jpg'
import FlatBread from '../images/recipes/FlatBread.jpg'
import bbq from '../images/recipes/bbq.jpg'
import steak from '../images/recipes/steak.jpg'
import Mayonnaise from '../images/recipes/Mayonnaise.jpg'
import sweetOnion from '../images/recipes/sweetOnion.jpg'
import turkey from '../images/recipes/turkey.jpg'
import bacon from '../images/recipes/bacon.jpg'
import chikenStrip from '../images/recipes/chikenStrip.jpg'
import HotChilli from '../images/recipes/HotChilli.jpg'
import pickle from '../images/recipes/pickle.jpg'
import pepperoni from '../images/recipes/pepperoni.jpg'
import salrami from '../images/recipes/salrami.jpg'
import white from '../images/recipes/white.jpg'
import teriyaki from '../images/recipes/teriyaki.jpg'



class Detail extends Component {
    state={
        images:
        [[
            {name:"허니오트",recipeImage:honeyOat},
            {name:"치킨",recipeImage:chiken},
            {name:"치즈",recipeImage:cheese},
            {name:"스위트칠리",recipeImage:sweetChilli},
            {name:"랜치드레싱",recipeImage:ranchDressing}
        ],
        [
            {name:"플랫 브레드",recipeImage:FlatBread},
            {name:"아보카도",recipeImage:avocado},
            {name:"할라피뇨",recipeImage:jalapenos},
            {name:"스모크 비비큐",recipeImage:bbq},
            {name:"소금",recipeImage:salt},
            {name:"후추",recipeImage:pepper},
        ],
        [   
            {name:"플랫 브레드",recipeImage:FlatBread},
            {name:"스테이크",recipeImage:steak},
            {name:"치즈",recipeImage:cheese},
            {name:"마요네즈",recipeImage:Mayonnaise},
            {name:"스모크 비비큐",recipeImage:bbq},
        ],
        [
            {name:"허니 오트",recipeImage:honeyOat},
            {name:"터키",recipeImage:turkey},
            {name:"베이컨",recipeImage:bacon},
            {name:"치즈",recipeImage:cheese},
            {name:"아보카도",recipeImage:avocado},
            {name:"랜치드레싱",recipeImage:ranchDressing},
            {name:"스위츠 어니언",recipeImage:sweetOnion},
            
       ],
       [
            {name:"플랫브레드",recipeImage:FlatBread},
            {name:"치킨 스트립",recipeImage:chikenStrip},
            {name:"베이컨",recipeImage:bacon},
            {name:"치즈",recipeImage:cheese},
            {name:"아보카도",recipeImage:avocado},
            {name:"랜치드레싱",recipeImage:ranchDressing},
            {name:"스위츠 칠리",recipeImage:sweetChilli},
       ],
       [
            {name:"허니 오트",recipeImage:honeyOat},
            {name:"피클 제거",recipeImage:pickle},
            {name:"터키",recipeImage:turkey}, 
            {name:"베이컨",recipeImage:bacon},
            {name:"치즈",recipeImage:cheese},
            {name:"랜치드레싱",recipeImage:ranchDressing},
            {name:"핫 칠리",recipeImage:HotChilli},
            {name:"후추",recipeImage:pepper},
       ],
       [
            {name:"화이트",recipeImage:white},
            {name:"페퍼로니",recipeImage:pepperoni},
            {name:"살라미",recipeImage:salrami},
            {name:"치즈",recipeImage:cheese},
            {name:"마요네즈",recipeImage:Mayonnaise},
            {name:"핫 칠리",recipeImage:HotChilli},
       ],
       [
            {name:"허니 오트",recipeImage:honeyOat},
            {name:"치킨 데리야끼",recipeImage:teriyaki},
            {name:"치즈",recipeImage:cheese},
            {name:"스위츠 어니언",recipeImage:sweetOnion},
            {name:"랜치드레싱",recipeImage:ranchDressing},
            {name:"스모크 비비큐",recipeImage:bbq},
       ]

    ]
  }
  render() {
    const { sandwichId } = this.props.match.params;
    console.log(this.props.match.params);
    const clickedSandwichId = parseInt(sandwichId);
    console.log(clickedSandwichId);
    return (
      <>
        <HomeLayout />
        <div className="detail">
          <div className="detail-wrapper">
            <div className="detail-content">
              <div className="detail-title">
                {this.props.match.params.sandwichtitle}
                <hr/>
               <span className="honey">꿀조합</span> <span className="honey honey-right">레시피</span>
                  
              </div>
             
              <div className={`detail-cover${sandwichId}`}></div>
              <p className="detail-content-summary" >
                   {this.props.match.params.sandwichDesc}
              </p>
              <div className="recipe">
                  <ul>
                     { this.state.images[sandwichId].map((image,index) =>
                          <li key={index}>
                            <img src={image.recipeImage} alt="recipeImage"/>
                            {image.name === "피클 제거"
                            ?<p style={{color:"red"}}>{image.name}</p>
                            :<p>{image.name}</p>}
                          </li>
                        )
                      }
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <CommentBox/>
      </>
    );
  }
}

export default Detail;
