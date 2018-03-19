import React from "react";
import className from "classnames";
import PropType from "prop-types";
import Button from "./Button";
import FormInput from "./FormInput";
const Component = React.Component;

class Calender extends Component{
    constructor(props){
        super(props);
        this.LessMonth = this.LessMonth.bind(this);
        this.AddMonth = this.AddMonth.bind(this);
        this.state = {
            nowMonth: this.props.month,
            nowYear: this.props.year,
            nowHour: this.props.hour,
            nowMinute: this.props.minute,
            targetDate: 1,
            data:null,
        };
        this.change = this.change.bind(this);
        this.save = this.save.bind(this);
        this.chosenDate=this.chosenDate.bind(this);
        // this.less = this.less.bind(this);
    }

    //减少月份
    LessMonth(){
        let nowMonth = this.state.nowMonth-1;
        let nowYear = this.state.nowYear;
        if (nowMonth<=0) {
            nowYear = nowYear-1;
            nowMonth = 12;
        }
        this.setState({
            nowMonth:nowMonth,
            nowYear:nowYear
        });

    }
    //增加月份
    AddMonth(){
        let nowMonth = this.state.nowMonth+1;
        let nowYear = this.state.nowYear;
        if (nowMonth>12) {
            nowYear = nowYear+1;
            nowMonth = 1;
        }
        this.setState({
            nowMonth:nowMonth,
            nowYear:nowYear
        });
    }
    //改变小时和分钟
    change(event){
        let target = event.target;
        let value = parseInt(target.value);
        let valueAdd = value;
        if (target.getAttribute('id')==='hour') {
            if (valueAdd>24) {
                this.setState({
                    nowHour:0,
                });
            } else if(valueAdd<0){
                this.setState({
                    nowHour:24,
                });
            } else{
                this.setState({
                    nowHour:valueAdd,
                });
            }
        } else if(target.getAttribute('id') ==='minute'){
            if (valueAdd>60) {
                this.setState({
                    nowMinute:0,
                });
            } else if(valueAdd<0){
                this.setState({
                    nowMinute:60,
                });
            } else{
                this.setState({
                    nowMinute:valueAdd,
                });
            }
        }
        }
        // 数据保存
    save(){
        const yearMonth= this.state.nowYear+"."+this.state.nowMonth;
        console.log(yearMonth);
        const date =this.state.targetDate;
        const hour = this.state.nowHour;
        const mimute = this.state.nowMinute;
        const result = yearMonth+"."+date+" "+hour+":"+mimute;
        console.log(result);
        this.props.saveCalendar(result);
    }
    //选中目标日期
    chosenDate(e){
       const target = e.target;
       const flag = target.getAttribute("flag");
       console.log(flag);
       this.setState({
           targetDate:flag,
       });
    }

    render(){
        let weeks = ["Mon","Tus","Wed","Thur","Fiv","Sat","Sun"];
        let dateFirst = this.state.nowYear+"."+this.state.nowMonth+"."+1;
        let weekDay = new Date(dateFirst).getDay();
        let dayNumber = 0;
        let nowMonth = this.state.nowMonth;
        let nowYear = this.state.nowYear;
        //获取月份的天数
        if (nowMonth ===2) {
            if (nowYear%4===0||nowYear%400===0) {
                dayNumber = 29;
            } else {
                dayNumber=28;
            }
        } else if(nowMonth===4||nowMonth===6||nowMonth===11){
            dayNumber = 30;
        }else {
            dayNumber = 31;
        }

        //获取第一天的开始位置
        let beginning = 0;
        if (weekDay === 1) {
            beginning =0;
        } else if(weekDay ===2){
            beginning = 1;
        } else if(weekDay===3){
            beginning =2;
        } else if(weekDay===4){
            beginning =3;
        } else if(weekDay===5){
            beginning =4;
        } else if(weekDay===6){
            beginning =5;
        }else if(weekDay===0){
            beginning =6;
        }

        // 日历主体
        let calendarBody =[];
        for (var i = 0; i < dayNumber+beginning; i++) {
            if (i>=beginning&&i<=dayNumber+beginning) {
                calendarBody.push(<span key={i} flag={i+1-beginning} onClick={this.chosenDate} className={(i+1-beginning)==this.state.targetDate?"chosen":""}>{i+1-beginning}</span>);
            }else{
                calendarBody.push(<span key={i} onClick={this.chosenDate}></span>);
            }
        }

        return(
            <div id="calender">
                <div className="clenderHeader">
                    <Button flag="monthLess" click={this.LessMonth} buttonContent="<<"></Button>
                    <span>{this.state.nowYear+"."+this.state.nowMonth}</span>
                    <Button flag="monthAdd" click={this.AddMonth} buttonContent=">>"></Button>
                </div>
                <div id="calendarWeek">
                    {weeks.map(item=><li className="week" key={item}>{item}</li>)}
                </div>
                <div className="calendarBody">
                    {calendarBody}
                </div>
                <div id="time">
                    <FormInput id="hour"
                               value={this.state.nowHour}
                               change={this.change}
                               type="number"
                               />
                    <FormInput id="minute"
                               value={this.state.nowMinute}
                               type="number"
                               change={this.change}
                                />
                </div>
                <Button click={this.save} id="save" buttonContent="Save" classs="save"/>
            </div>
        )
    }
}
Calender.PropType = {}
export default Calender
