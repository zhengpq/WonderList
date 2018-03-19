import React from "react";
import Button from "./Button"
import className from "classnames";
import PropType from "prop-types";
import FormInput from "./FormInput";
import Calendar from "./Calender";
import Rating from "./Rating";
const Component = React.Component;

class Form extends Component{
    constructor(props){
        super(props);
        this.state ={
            field:this.props.field,
            remindTime:new Date().getFullYear()+"."+new Date().getMonth()+"."+new Date().getDate(),
            setTime:false,
        };

        this.setTime = this.setTime.bind(this);
        this.saveTime=this.saveTime.bind(this);
    }
    //点击出现设置时间的界面
    setTime(){
        console.log(this.refs.rating);
        this.setState({
            setTime:true,
        });
    }
    //保存时间
    saveTime(result){
        this.setState({
            remindTime:result,
            setTime:false,
        })
    }
    save(){}
   // 展示日历
    showCalendar(){
        if (this.state.setTime) {
            return(<Calendar month={new Date().getMonth()+1}
                             year={new Date().getFullYear()}
                             hour={new Date().getHours()}
                             minute={new Date().getMinutes()}
                             saveCalendar={this.saveTime}/>)
        } else {
            return null;
        }
    }
    render(){
        const fields = this.state.field;
        if (this.props.readOnly) {
            const fieldChange=fields.map(function (item) {
                if (item.type==="rating") {
                    return(
                        <div id={item.id} key={item.id}>
                            <label htmlFor={item.id}>{item.label}:</label>
                            <span id={item.id}><Rating max={item.max} onRatingNumber={item.onRatingNumber} frozen={item.frozen}/></span>
                        </div>
                    )
                } else {
                    return(
                        <div id={item.id} key={item.id}>
                            <label htmlFor={item.id}>{item.label}:</label>
                            <span id={item.id}>{item.defaultValue}</span>
                        </div>
                    );
                }
            },this);
            return (
                <div>
                    {fieldChange}
                </div>
            )
        }else{
            const fieldChange = fields.map(function (item) {
                if (item.type==="calendar"){
                    return(
                        <div id={item.id} key={item.id}>
                            <label htmlFor={item.id}>{item.label}</label>
                            <FormInput id={item.id}
                                       value={this.state.remindTime}
                                       type={item.type}
                                       max={item.max}
                            />
                        </div>
                    );
                }else if(item.type==="rating"){
                    return(
                        <div id={item.id} key={item.id}>
                            <label htmlFor={item.id}>{item.label}</label>
                            <FormInput id={item.id}
                                       defaultValue={item.defaultValue}
                                       type={item.type}
                                       max={item.max}
                                       ref="rating"/>
                        </div>
                    );
                }else {
                    return(
                        <div id={item.id} key={item.id}>
                            <label htmlFor={item.id}>{item.label}</label>
                            <FormInput id={item.id}
                                       defaultValue={item.defaultValue}
                                       type={item.type}
                                       max={item.max}/>
                        </div>
                    );
                }
            },this);

            return (
                <div>
                    {fieldChange}
                    <Button id="setTime" class="setTime" click={this.setTime} buttonContent="SetTime"/>
                    {this.showCalendar()}
                </div>
            );
        }
    }
}

Form.PropType={}
export default Form