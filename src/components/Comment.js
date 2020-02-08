import React, { Component } from "react";
import "./Comment.css";
import StarRating from "./star";
import user from "../images/user/user.png";

export default class CommentBox extends Component {
  state = {
    open: false,
    comments: [
      {
        id: 1,
        author: "써브웨이 매니아",
        text: "서브웨이 엄청좋아요",
        starSelected: 3
      },
      {
        id: 2,
        author: "샌드위치 좋아",
        text: "서브웨이 맛있어요",
        starSelected: 4
      },
      {
        id: 3,
        author: "I love subway",
        text: "서브웨이는 짱이에요",
        starSelected: 5
      }
    ]
  };

  _addComment = (author, text, starSelected) => {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      text,
      starSelected
    };
    this.setState({ comments: this.state.comments.concat([comment]) });
  };
  _deleteComment = id => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== id)
    });
  };
  _getComments = () => {
    this.state.comments.map(comment => (
      <Comment key={comment.id} author={comment.author} text={comment.text} />
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
          {this.state.comments.map(comment => (
            <Comment
              key={comment.id}
              id={comment.id}
              deleteComment={this._deleteComment}
              author={comment.author}
              text={comment.text}
              starSelected={comment.starSelected}
            />
          ))}
        </div>
      </>
    );
  }
}

class CommentForm extends Component {
  state = {
    starSelected: 0,
    error: false
  };
  _parentCallback = dataFromChild => {
    // 자식 컴포넌트에서 받은 값을 이용한 로직 처리
    this.setState({
      starSelected: dataFromChild
    });
  };

  _handleSubmit = e => {
    e.preventDefault();
    const { starSelected } = this.state;
    if(starSelected === 0){
      this.setState({error: true})
      return
    } else{
      this.setState({error: false})
    }
   
    let author = this._author;
    let text = this._text;
    this.props.addComment(author.value, text.value, starSelected);
  };
  _textLating = starSelected => {
    if (starSelected === 1) {
      return "별로에요";
    } else if (starSelected === 2) {
      return "그저그래요";
    } else if (starSelected === 3) {
      return "보통이에요";
    } else if (starSelected === 4) {
      return "좋아요";
    } else if (starSelected === 5) {
      return "완전좋아요";
    } else {
      return;
    }
  };

  render() {
    const { starSelected } = this.state;
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
          <StarRating parentCallback={this._parentCallback} />
        </div>

        <div className="comment-form-lating">
          {`평점:${this.state.starSelected}점`}
        </div>
        <div style={{color:"orangered" ,fontSize:"20px"}}>
        {this.state.error === true ? "별을 눌러 평가해주세요" : ""}
        </div>
       <div className="comment-lating-container">
          <div className="comment-lating-text">
             {this._textLating(starSelected)}
          </div>
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
    const { id, deleteComment } = this.props;
    return (
      <div className="comment">
        <img src={user} alt="profile" />
        <p className="comment-author">{this.props.author}</p>
        <p className="comment-text">{this.props.text}</p>
        <p className={`comment-rating comment-rating${this.props.starSelected}`}>{`평점:${this.props.starSelected}`}</p>
        <div className="comment-delete">
          <button onClick={() => deleteComment(id)}>삭제</button>
        </div>
      </div>
    );
  }
}
