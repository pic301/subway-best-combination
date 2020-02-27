import React, { Component } from "react";
import Message from "./Message";
import firebase from 'firebase';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/styles'


const styles = theme => ({
  ChatTitle:{
    color:"#029132",
    textAlign:"center",
    fontWeight: "bold"
  }
  });
  
class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      message: "",
      list: []
    };

    this.messageRef = firebase
      .database()
      .ref()
      .child("messages");
    this.listenMessages();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({ userName: nextProps.user.displayName });
    }
  }
  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  handleKeyPress(event) {
    if (event.key !== "Enter") return;
    this.handleSend();
  }

  handleSend() {
    if (this.state.message) {
      var newItem = {
        userName: this.state.userName,
        message: this.state.message
      };
      this.messageRef.push(newItem);
      this.setState({ message: "" });
    }
  }
  listenMessages() {
    this.messageRef
      .limitToLast(10)
      .on('value', message => {
        const data = message.val()
      if(data){
        this.setState({
            list: Object.values(message.val()),
          });
      } else{
          return null
      }
      
        
      });
  } 


  render() {
    const {classes} =this.props
    return (

      <div className="message-form" >
        <div className="message-row">
          <Typography className={classes.ChatTitle}variant="h2" gutterBottom> <span style={{color:"#ffc20e"}}>꿀조합</span> 채팅 </Typography>
          <div style={{border: "1px solid #029132" }}>
          {this.state.list.map((item, index) => (
            <Message key={index} message={item} />
          ))}
        </div>
        <div>
          <Input
            type="text"
            placeholder="메시지를 입력해주세요"
            value={this.state.message}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <Button onClick={this.handleSend.bind(this)}>
            보내기
          </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(MessageForm);

