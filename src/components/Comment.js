import React, { Component } from "react";

export default class CommentBox extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="comment-box">
          <span>꿀조합</span>
          <span>게시판</span>
        </div>
        <CommentForm />
        <button id onClick>
          댓글 보기        
        </button>
        <h3>댓글</h3>
        <h4 className="comment-count">댓글숫자</h4>
      </>
    );
  }
}

class CommentForm extends Component {
  render() {
    return (
      <form className="comment-form" onSubmit>
        <div className="comment-form-fields">
          <input type="text" />
          <textarea  rows="4"></textarea>
        </div>
        <div className="comment-form-actions">
            <button type="submit">댓글 등록</button>
          </div>
      </form>
    );
  }
}

class Comment extends Component{
  render(){
    return (
      <div className="comment">
          <div className="comment-header">

          </div>
          <div className="comment-body">

          </div>
          <div className="comment-footer">

          </div>
      </div>
    )
  }
}