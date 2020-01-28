import React, { Component } from 'react';
import './detail.css'

class Detail extends Component {
  
    render() {
       const { sandwichId } = this.props.match.params
       console.log(this.props.match.params)
       const clickedSandwichId= parseInt(sandwichId)
       console.log(clickedSandwichId)
        return (
            <div className='detail-cover'>
               
            </div>
        );
    }
}

export default Detail;