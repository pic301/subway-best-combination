import React, { Component } from 'react';
import './star.css'

class StarRating extends Component {
    constructor(props){
    super(props)
    this.state={
        starSelected:0, 
        stars:[1,2,3,4,5,]
    }
    
}
_change = (starSelected) => {
    this.setState({starSelected})
    this.props.parentCallback(starSelected)
}


    render() {
        const { starSelected } = this.state
        console.log(starSelected)
        return (
            <div className="star-container">
            {this.state.stars.map((star,i) =>
                <Star
                key={i}
                selected={i< starSelected}
                onClick={()=> this._change(i+1)}
                />
            )}
            </div>
        );
    }
}

export default StarRating;

class Star extends Component {
    render() {
        const { selected, onClick } = this.props
        return (
             <div className={
                selected 
                ? "star-rating selected"
                : "star-rating"
            }
                onClick={onClick}
            >
            </div>
        )
    }
}




