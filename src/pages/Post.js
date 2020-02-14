import React, { Component } from "react";
import "./Post.css";
import Picture from '../components/Picture'
import { db } from '../components/firebaseConfig'

class Post extends Component {
  state = {
    title: "",
    desc: ""
  };

  onChange = (e) =>{
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const { combination } = this.props.location
      if(!combination){
        this.props.history.push('/combination')
        return alert("조합을 만들어주세요")
      }
    console.log(combination)
    db.collection('board').add({
      title: this.state.title,
      desc: this.state.desc,
      combination: [...combination],
    }).then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  this.props.history.push('/board')
  
    this.setState({
      title: "",
      desc: "",
    })
  }
  render() {
    return (
      <div className="post">
        <div className="post-wrapper">
          <div className="post-title">
            나만의 <span>꿀조합</span>
          </div>
          <form className="post-form" action="" onSubmit={this.onSubmit}>
            <label>
              꿀조합 <span>제목:</span>
              <input type="text" name="title" value={this.state.title} onChange={this.onChange}required />
            </label>
            <br />
            <label>
              꿀조합 <span>설명:</span>
              <textarea name="desc"  cols="10" rows="10" value={this.state.desc} onChange={this.onChange} required></textarea>
            </label>
            <br />
            {this.props.location.combination &&
              this.props.location.combination.map((item, i) => (
                <div key={i} className="post-combination" >
                  {` ${i + 1}.${item}`}
                </div>
              ))}
            <div className="post-button">
            <button >게시판에 올리기</button>
            </div>
          </form>
          <Picture/>
        </div>
      </div>
    );
  }
}

export default Post;
