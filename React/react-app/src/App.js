import React, { Component } from 'react'
import './App.css';
import TOC from './components/TOC.js'
import Content from './components/Content.js'
import Subject from './components/Subject'





class Aside extends Component{
  render(){
    // 이게 인라인 스타일?
    const tempStyle={
      display:"inline-block",
      color : "red",
      margin: 'auto',
    }
    
    return(
      <aside>
        <h3 style={tempStyle}>테스트입니다 </h3>
      </aside>
    )
  }
}


class App extends Component{
  // 초기화를 담당
  constructor(props){
    super(props)
    this.state ={
      mode: 'welcome',
      selected_content_id : 2, 
      subject: {
        title: "WEB",
        sub: 'World Wide Web',
      },
      welcome : {title:'Welcome',desc:'Hello, React!!'},
      contents:[
        {id:0, title:"HTML",desc:'HTML is MarkUp'},
        {id:1, title:"CSS",desc:'CSS is for design'},
        {id:2, title:"JS",desc:'JavaScript is for interactive'},
      ]
    }
  }
  render(){
    let _title, _desc = null 
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
    }else if(this.state.mode === 'read'){
      const datas = this.state.contents
      const result = datas.map(function(data){
        if(data.id === this.state.selected_content_id ){
            // _title = this.state.contents[0].title
            // _desc = this.state.contents[0].desc
            return {title:data.title,desc:data.desc}
        }
      }.bind(this))
      _title = result[this.state.selected_content_id].title
      _desc = result[this.state.selected_content_id].desc
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={()=>{
            this.setState({'mode':'welcome'})
          }}
        ></Subject>
        <TOC 
          data={this.state.contents}
          onChangePage={(id)=>{
            this.setState({
              'mode':'read',
              'selected_content_id':parseInt(id)
            })
          }}
          ></TOC>
        <Content title={_title} desc={_desc}></Content>
        <Aside></Aside>
      </div>
    )
  }
}
export default App;
