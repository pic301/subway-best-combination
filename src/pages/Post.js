import React, { Component } from "react";
import "./Post.css";
import Picture from '../components/Picture'
import { db } from '../components/firebaseConfig'

class Post extends Component {
  state = {
    title: "",
    desc: "",
    imageAsUrl:"",
  };

handlerImageAsUrl=( fireBaseUrl ) => {
  this.setState(() => ({imageAsUrl: fireBaseUrl}))
}

  onChange = (e) =>{
   
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

    db.collection('board').add({
      title: this.state.title,
      desc: this.state.desc,
      combination: [...combination],
      url:this.state.imageAsUrl,
      createdAt: new Date(),
      liked:false
    }).then(function() {
     
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  this.props.history.push('/board')
  
    this.setState({
      title: "",
      desc: "",
      imageAsUrl:"",
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
       <div className="post-make-container">
       <img className="upload_image"src={this.state.imageAsUrl ||"https://via.placeholder.com/400x300"} 
         alt="imageTag" width="300px" height="300px" />
            <br />
         <div className="post-combination-container">
              {this.props.location.combination &&
              this.props.location.combination.map((item, i) => (
                <div key={i} className="post-combination" >
                  {` ${i + 1}.${item}`}
         </div>
              ))}
         </div>
       </div>
            <div className="post-button">
            <button >게시판에 올리기</button>
            </div>
          </form>
          <Picture imageAsUrl={this.imageAsUrl} handlerImageAsUrl={this.handlerImageAsUrl}/>
        </div>
      </div>
    );
  }
}

export default Post;
