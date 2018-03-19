import React from "react";
import className from "classnames";
import PropType from "prop-types";
const Component = React.Component;

class Rating extends Component{
    constructor(props){
        super(props);
        this.state = {
            staronRatingNumber:this.props.onRatingNumber,
            frozen:this.props.frozen,

        }
    }

    //get the number of the rating stars8
    getValue(){
        let onRatingNumber = this.state.staronRatingNumber;
        return onRatingNumber;
    }

    //chang the star state;
    onRating(event){
        let targetFlag = parseInt(event.target.getAttribute("flag"));
        console.log(targetFlag);
        this.setState({
            staronRatingNumber:targetFlag,
        })
    }

    render(){
        let stars = [];
        let starNumber = this.props.max;
        for (var i = 0; i <starNumber; i++) {
            if (this.state.frozen) {
                stars.push(
                    <span key={i}
                          flag={i}
                          className={className("Rating",i<=this.state.staronRatingNumber?"onRating":null)}
                    >&#9734;</span>
                );
            } else {
                stars.push(
                    <span key={i}
                          onClick={this.onRating.bind(this)}
                          flag={i}
                          className={className("Rating",i<=this.state.staronRatingNumber?"onRating":null)}
                    >&#9734;</span>
                );
            }
        }
        return(
            <div id="Rating">
                {stars}
            </div>
        )
    }
}

Rating.PropType={
    max:PropType.number,
};
PropType.defaultValue = {
    max:6,
};

export default Rating