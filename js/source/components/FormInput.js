import React from "react";
import className from "classnames";
import PropType from "prop-types";
import Rating from "./Rating";
import Button from "./Button";
const Component = React.Component;

class FormInput extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const common = {
            id:this.props.type,
            defaultValue:this.props.defaultValue,
            ref:"input",
        };
        switch (this.props.type){
            case "content":
                return <input {...common} type="text" onChange={this.props.change}/>;
                break;
            case "remarks":
                return <input {...common} type="textarea"/>;
                break;
            case "number":
                return <input {...common}
                              id={this.props.id}
                              value={this.props.value}
                              type={this.props.type}
                              onChange={this.props.change}
                              />;
            case"rating":
                return <Rating {...common} max={this.props.max}/>;
            case"calendar":
                return <div><input {...common} type="calendar" value={this.props.value}/>
                       </div>;
            default:
                return <input {...common} type="text"/>

        }
    }
}

FormInput.PropType = {
    type:PropType.string,
};

export default FormInput