import React,{ Component }from 'react'
import "./Message.css"

class Message extends Component{
    render(){
        return(
            <div className="message-container">
                <span className="message-writer">
                {!this.props.message.userName && !this.props.message.userName 
                    ?`익명:`
                    :`${this.props.message.userName}:`}
                </span>
                {this.props.message.message}
            </div>
        )
    }
}

export default Message;



// class Message extends Component{
//     render(){
//         return(
//             <div className="message-container">
//                 <span className="message-writer">
//                 {!this.props.userName 
//                     ? `익명:`
//                     :`${this.props.userName}:`
//                 }
//                 </span>
//                 {this.props.message.message}
//             </div>
//         )
//     }
// }

// export default Message;