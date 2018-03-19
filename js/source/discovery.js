"use strict";
import React from "react";
import ReactDOM from "react-dom";
import Logo from "./components/Logo";
import Button from "./components/Button";
import Rating from "./components/Rating";
import FormInput from "./components/FormInput";
import Calendar from "./components/Calender";
import Form from "./components/Form";
import Show from "./components/Show";
import Excel from "./components/Excel";
ReactDOM.render(<div>
        <div>
            <h1>Logo</h1>
            <Logo></Logo>
        </div>
        <div>
            <h1>Button</h1>
            <Button buttonContent="New Item" flag="addKind"click={()=>{console.log("hello")}}></Button>
        </div>
        <div>
            <h1>Rating</h1>
            <Rating max={5}></Rating>
        </div>
        <div>
            <h1>FormInout</h1>
        </div>
        <div>
            <h1>Calendar</h1>
            <Calendar month={new Date().getMonth()+1}
                      year={new Date().getFullYear()}
                      hour={new Date().getHours()}
                      minute={new Date().getMinutes()}/>
        </div>
       <div>
           <h1>Form</h1>
           <Form field={[{label:"Content",type:"text",id:"content",defaultValue:"Your Item"},
                         {label:"Remarks",type:"text",id:"remarks",defaultValue:"Details of your item"},
                         {label:"Priority",type:"rating",id:"rating",max:6},
                         {label:"Reminder Time",type:"calendar",id:"reminderTime",defaultValue:new Date().getFullYear()+"."+(new Date().getMonth()+1)+"."+new Date().getDate()}]}/>
       </div>
       <div>
           <h1>Show</h1>
           <Show readOnly={true}
                 field={[{label:"Content",type:"text",id:"content",defaultValue:"Your Item"},
                     {label:"Remarks",type:"text",id:"remarks",defaultValue:"Details of your item"},
                     {label:"Priority",type:"rating",id:"rating",max:5,onRatingNumber:3,},
                     {label:"Reminder Time",type:"calendar",id:"reminderTime",defaultValue:"2017.12.14"}]}
                 show={true}/>
       </div>
       <div>
           <h1>Excel</h1>
           <Excel/>
       </div>
    </div>,
    document.getElementById("Components"));


