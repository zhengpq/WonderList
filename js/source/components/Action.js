import React from "react";
import className from "classnames";
import PropType from "prop-types";
import Button from "./Button";
const Component = React.Component;

class Action extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <span flag="read" id="read" number={this.props.number} onClick={this.props.Action}>&#8505;</span>
            <span flag="edit" id="edit" number={this.props.number} onClick={this.props.Action}>&#10000;</span>
            <span flag="delete" id="delete" number={this.props.number} onClick={this.props.Action}>X</span>
        </div>);
    }
}

export default  Action