import React from "react";
import className from "classnames";
import PropType from "prop-types";
import Form from "./Form";
import Button from "./Button";
const Component = React.Component;

class Show extends Component{
    constructor(props){
        super(props);
        this.state={
           field:this.props.field,
            readOnly:this.props.readOnly,
            show:this.props.show,
        }
        this.save = this.save.bind(this);
    }

    // 编辑页面出现
    componentWillUnmount(){
        document.body.classList.remove("showOpen");
    }

    //点击保存后编辑页面隐藏
    componentDidMount(){
        document.body.classList.add("showOpen");
    }
    //数据保存
    save(){
        if (this.state.readOnly) {
            this.props.OK();
        } else {

        }
    }
    render(){
        if (this.state.show) {
            return (
                <div id="Show">
                    <Form field={this.state.field} readOnly={this.state.readOnly}/>
                    <Button click={this.save} buttonContent="OK"/>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Show