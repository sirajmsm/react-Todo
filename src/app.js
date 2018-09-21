import React, { Component } from 'react';
import axios from 'axios';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      addList: []
    };
    this.taskInput = React.createRef();
    this.addMyClick = this.addMyClick.bind(this);
    this.onToggleTask = this.onToggleTask.bind(this);
    this.testMount = this.testMount.bind(this);
  }
  testMount(){
   
    axios.get(' http://www.mocky.io/v2/5ba47c822f00006000968c0e').then(r => {
      let data = this.setState({addList:(r.data.addList)})
      console.log("data read "+r.data.addList);
    });
  }
  componentDidMount(){
     console.log("hello");
  }
  addMyClick() {
    //alert(this.taskInput.current.value);
    this.setState({
      addList:[...this.state.addList,{
         title:this.taskInput.current.value,
         isCompleted:false }
      ]
    })
    this.taskInput.current.value = "";
  }
  onToggleTask(addListItem){
    let addList = this.state.addList;
    let newAddList = addList.map((item,index)=>{
      if(addListItem.title == item.title)
      return { title: item.title, isCompleted:!item.isCompleted};
      return item;
      });

      this.setState({addList: newAddList});
  }

  render() {
    return (
      <div class="toDo">
      <div class="container">
      <div class="row">
        <div class="col-8">
        <input class="form-control mr-sm-2"ref ={this.taskInput}/></div>
        <div class="col-4">
        <button class="btn btn-outline-success" onClick={this.addMyClick}>Add</button> <button class="btn btn-outline-danger" onClick={this.testMount}>Read</button></div>
        </div></div>

        <div class="container">
        <div class="row toDoList">
        <ul>
          {this.state.addList.map((addList, index) => {
            return <li class="alert alert-danger" style={{'text-decoration':addList.isCompleted? 'line-through':'','color':'red'}}>
            <input class="alert-link" type="checkbox" checked={addList.isCompleted} onChange={()=> this.onToggleTask(addList)}/>
            {addList.title}</li>
          })}
        </ul>
        </div></div>
      </div>
      
    );
  }
}