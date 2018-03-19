import React from "react";
import PropType from "prop-types";
import className from "classnames";
const Component = React.Component;

class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button
                id={this.props.id}
                className={className("Button",this.props.flag)}
                onClick={this.props.click}>{this.props.buttonContent}
            </button>
        );
    }

};

Button.PropType = {
    flag:PropType.string,
    click:PropType.func
};

export default  Button