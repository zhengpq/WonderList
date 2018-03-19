import React from "react";
import Rating from "./Rating";
import Show from "./Show";
import className from "classnames";
import PropType from "prop-types";
const Component = React.Component;

class  Excel extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[["item1","write something",1,"2017.12.01"],],
            show:false,
            readOnly:false,
            trNumber:false,
            showField:null,
        };
        this.action = this.action.bind(this);
    }

    // 编辑页面出现
    componentWillUnmount(){
        document.body.classList.remove("showOpen");
        console.log(this.state);
    }

    //点击保存后编辑页面隐藏
    componentDidMount(){
        document.body.classList.add("showOpen");
        console.log(this.state);
    }

    //展示编辑页面
    showShow(){
        if (this.state.show) {
            return <Show show={this.state.show} readOnly={this.state.readOnly} field={this.state.showField}/>
        } else {
            return null;
        }
    }

    //获取数据并且进行数据修改
    translateData(trNumber){
        const showData = this.state.data[trNumber];
        console.log(showData);
        const translated = [{label:"Content",type:"text",id:"content",defaultValue:showData[0]},
        {label:"Remarks",type:"text",id:"remarks",defaultValue:showData[1]},
        {label:"Priority",type:"rating",id:"rating",max:5,onRatingNumber:showData[2]},
        {label:"Reminder Time",type:"calendar",id:"reminderTime",defaultValue:showData[3]}];
        return translated;
    }
    // 编辑
    edite(event){
        console.log("edite");
        const trNumber = parseInt(event.target.getAttribute("number"));
        const showField = this.translateData(trNumber);
        console.log(showField);
        this.setState({
            show:true,
            readOnly:false,
            trNumber:trNumber,
            showField:showField,
        });
        console.log(this.state);
    }

    //查看
    read(event){
        console.log("read");
        const trNumber = parseInt(event.target.getAttribute("number"));
        const showField = this.translateData(trNumber);
        console.log(showField);
        this.setState({
            show:true,
            readOnly:true,
            trNumber:trNumber,
            showField:showField,
        });
        console.log(this.state);
    }

    // 删除
    deleteData(event){
        console.log("delete");
        const trNumber = parseInt(event.target.getAttribute("number"));
        const dataLeft = this.state.data.splice(trNumber,1);
        console.log(dataLeft);
        this.setState({
            data:this.state.data.splice(trNumber,1),
            show:false,
            readOnly:false,
        });
        console.log(this.state);
    }

    //Action
    action(event){
        this.setState({
            show:false,
            readOnly:true,
        });
        console.log(event);
        console.log(event.target);
        switch (event.target.getAttribute("id")){
            case "edit":
                this.edite(event);
                console.log(this.state);
                break;
            case "read":
                this.read(event);
                console.log(this.state);
                break;
            case "delete":
                this.deleteData(event);
                console.log(this.state);
                break;
            default:
                return;
                }
    }

    render(){
        const headers = ["Content","Remarks","Priority","Reminder Time","Action"];
        let Header = headers.map(function (item,index) {
            return <th key={index}>{item}</th>
        });

        const tbody = this.state.data.map(function (item,index) {
            return(
                <tr key={index}>{
                    item.map(function (element,index) {
                        if (index===2) {
                            return(<td key={index}><Rating max={5} onRatingNumber={3} frozen={true}/></td>)
                        } else {
                            return(<td key={index}>{element}</td>)
                        }

                    },this)
                }
                <td >
                    <div>
                        <span flag="read" id="read" number={index} onClick={this.action}>&#8505;</span>
                        <span flag="edit" id="edit" number={index} onClick={this.action}>&#10000;</span>
                        <span flag="delete" id="delete" number={index} onClick={this.action}>X</span>
                    </div>
                </td>
                </tr>
            )
        },this);

        return(
          <div>
              <table>
                  <thead>
                  <tr>{Header}</tr>
                  </thead>
                  <tbody>
                  {tbody}
                  </tbody>
              </table>
              {this.showShow()}
          </div>
        );

    }
}

Excel.PropTypes={

};

export default Excel