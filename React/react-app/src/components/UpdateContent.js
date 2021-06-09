import React, {Component} from 'react'

class UpdateContent extends Component{

  constructor(props){
    super(props)
    this.state={
      id : this.props.data.id,
      title : this.props.data.title,
      desc : this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this)
  }
  inputFormHandler(e){
    // 대괄호 씌우니까 e.target.name이 먼저 동작하고, 그걸 문자화 한 다음 배열꼴로 만들어준다
    this.setState({[e.target.name]:e.target.value}) // [] 대괄호 문법
  }

  render(){
    return (
      <article>
        <h2>Update</h2>
          <form action="/create_process" method="POST" 
          onSubmit={function(e){
            e.preventDefault()

            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc,
            )
          }.bind(this)}>
            <input type="hidden" name="id" value={this.state.id}></input>
            <label htmlFor="title">title</label>
            <p>
              <input 
                type="text"
                name="title"
                placeholder="title"
                value = {this.state.title}
                onChange={this.inputFormHandler}
              ></input></p>
            <p>
              <textarea 
                name="desc"
                placeholder="desc"
                value = {this.state.desc}
                onChange={this.inputFormHandler}
                ></textarea>
            </p>
            <button>제출</button>
          </form>
      </article>
    )
  }
}

export default UpdateContent