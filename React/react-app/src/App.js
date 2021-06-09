import React, { Component } from 'react'
import './App.css';
import TOC from './components/TOC.js'
import ReadContent from './components/ReadContent.js'
import Subject from './components/Subject'
import Control from './components/Control.js'
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';





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
    this.max_content_id = 2
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
  getReadContent(){
    let i = 0
    while (i<this.state.contents.length){
      const data = this.state.contents[i]
      if(data.id === this.state.selected_content_id){
        return data
      }
      i += 1
    }
  }


  getContent(){
    let _title, _desc,_article,_content = null 
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === 'read'){
      _content= this.getReadContent()
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if(this.state.mode === 'create'){
      _article = <CreateContent
        onSubmit= {(_title,_desc)=>{
          this.max_content_id +=1
          const contents = this.state.contents.concat({
            id:this.max_content_id,
            title : _title,
            desc: _desc,
          })
          this.setState({contents: contents,mode:'read',selected_content_id:this.max_content_id})
        }}></CreateContent>
    } else if(this.state.mode ==='update'){
      _content = this.getReadContent()
      _article = <UpdateContent
        data = {_content}
        onSubmit={
          function(_id,_title,_desc){
            const _contents = Array.from(this.state.contents)
            let i = 0
            while(i<_contents.length){
              if(_contents[i].id === _id){
                _contents[i] ={id:_id,title:_title,desc:_desc}
                break
              }
              i+=1
            }
            this.setState({contents:_contents, mode:'read'})
        }.bind(this)}
        
      ></UpdateContent>
    }
    return _article

  }
  render(){
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
          <Control onChangeMode={(_mode)=>{

            if(_mode === 'delete'){
              if(window.confirm('Are you Sure??')){
                const _contents = Array.from(this.state.contents)
                let i = 0
                while(i<this.state.contents.length){
                  if(_contents[i].id === this.state.selected_content_id){
                    _contents.splice(i,1)
                    break
                  }
                  i += 1
                }
                this.setState({mode:'welcome',contents:_contents})
                alert('Deleted!')
              }
            }else{  
              this.setState({
                mode:_mode,
              })
            }
          }}></Control>

        {this.getContent()}
        <Aside></Aside>
      </div>
    )
  }
}
export default App;
