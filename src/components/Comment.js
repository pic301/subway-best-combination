import React, { Component } from "react";
import "./Comment.css";
import StarRating from './star'
import user from '../images/user/user.png'

export default class CommentBox extends Component {
  state = {
    open: false,
    comments: [
      { id: 1, author: "써브웨이 매니아", text: "서브웨이 엄청좋아요" },
      { id: 2, author: "샌드위치 좋아", text: "서브웨이 맛있어요" },
      { id: 3, author: "I love subway", text: "서브웨이는 짱이에요" }
    ],
    starNumber: 0
  };

  _addComment = (author, text) => {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      text
    };
    this.setState({ comments: this.state.comments.concat([comment]) });
  };
   _deleteComment = (id) => {
    this.setState({comments:this.state.comments.filter(
      comment => comment.id !== id)})
    
  }
  _getComments = () => {
    this.state.comments.map(comment => (
      <Comment key={comment.id}  author={comment.author} text={comment.text} />
    ));
  };
 
  _getCommentsTitle = commentCount => {
    if (commentCount === 0) {
      return "댓글이 없습니다";
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  };

  render() {
    const commentCount = this.state.comments.length;
    return (
      <>
        <div className="comment-box">
          <span className="comment-box-left">꿀조합</span>
          <span className="comment-box-right"> 후기</span>
          <CommentForm addComment={this._addComment} />
          <h3>댓글</h3>
          <h4 className="comment-count">
            {this._getCommentsTitle(commentCount)}
          </h4>
        {   this.state.comments.map(comment => (
        <Comment key={comment.id} id={comment.id} deleteComment={this._deleteComment}  author={comment.author} text={comment.text} />
        ))}
        </div>
      </>
    );
  }
}

class CommentForm extends Component {
  _handleSubmit = e => {
    e.preventDefault();
    let author = this._author;
    let text = this._text;
    this.props.addComment(author.value, text.value);
  };
  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit}>
        <div className="comment-form-fields">
          <input
            placeholder="Name"
            type="text"
            required
            ref={input => {
              this._author = input;
            }}
          />
          <textarea
            placeholder="Comment"
            rows="4"
            required
            ref={textarea => {
              this._text = textarea;
            }}
          ></textarea>
         <StarRating/>
        </div>
        <div className="comment-form-actions">
          <button type="submit">댓글 등록</button>
        </div>
      </form>
    );
  }
}

class Comment extends Component {

  render() {
    const { id, deleteComment } = this.props
    return (
      <div className="comment">
        <img src={user} alt="profile"/>
        <p className="comment-author">{this.props.author}</p>
        <p className="comment-text">{this.props.text}</p>
        <div className="comment-delete">
            <button  onClick={() => deleteComment(id)}>삭제</button>
        </div>
      </div>
    )
  }
}
