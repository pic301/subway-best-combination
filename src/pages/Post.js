import React, { Component } from "react";
import "./Post.css";

import beeLogo from '../images/logo/bee.png'

class Post extends Component {
  state = {
    title: "",
    desc: ""
  };
  render() {
    return (
      <div className="post">
        <div className="post-wrapper">
          <div className="post-title">
            나만의 <span>꿀조합</span>
          </div>
          <form className="post-form" action="">
            <label>
              꿀조합 <span>제목:</span>
              <input type="text" name="title" required />
            </label>
            <br />
            <label>
              꿀조합 <span>설명:</span>
              <textarea name="desc" id="" cols="10" rows="10" required></textarea>
            </label>
            <br />
            {this.props.location.combination &&
              this.props.location.combination.map((item, i) => (
                <div key={i} className="post-combination" >
                  {` ${i + 1}.${item}`}
                </div>
              ))}
            <div className="post-button">
            <button >제출하기</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Post;
