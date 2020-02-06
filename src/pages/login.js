import React, { Component }from "react";
import  fire, {provider}   from '../components/firebaseConfig'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };
  }
  _googleLogin =(e) => {
    e.preventDefault()
    fire
    .auth()
    .signInWithPopup(provider)
    .then(
       res => {
         let token = res.credential.accessToken;
         let user = res.user;
         this.props.history.push('/')
       }
    )
    .catch( error => {
       this.setState({error})
    })
    
    // firebase.auth().signInWithPopup(provider).then(function(result) {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   var token = result.credential.accessToken;
    //   // The signed-in user info.
    //   var user = result.user;
    //   // ...
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });

  }
  _login = (e) => {
    e.preventDefault()
      //fire  = firebase.initializeApp(firebaseConfig);
      fire
      .auth()
      .signInWithEmailAndPassword(this.state.email,this.state.password)
      .then(res => {
          this.props.history.push('/')
      }
        
      ).catch( error => {
          this.setState({error})
      })
  } 
  _signUp = (e) => {
    e.preventDefault()
    fire
    .auth()
    .createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then(res =>{
      this.setState({
         email:'',
         password:'',
         error:'',
      })
    })
    .catch(error => {
      this.setState({error})
    })

  }
 
  handleChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    const { error } = this.state
    return (
      <div>
        <h3>LOGIN</h3>
        <form >
          <input type="email" name="email" onChange={this.handleChange} value={this.state.email}  />
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
        </form>
        <button onClick={this._login}>Login</button>
        <button onClick={this._signUp}>SignUp</button>
        <button onClick={this._googleLogin}>google</button>
        {error && <p>{error.message}</p>}
      </div>
     
    );
  }
}

export default Login;
