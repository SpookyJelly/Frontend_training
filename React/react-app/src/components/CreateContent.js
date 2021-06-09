import React, {Component} from 'react'

class CreateContent extends Component{
  render(){
    return (
      <article>
        <h2>Create</h2>
          <form action="/create_process" method="POST" onSubmit={function(e){
            e.preventDefault()

            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            )
          }.bind(this)}>
            <label htmlFor="title">title</label>
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p>
              <textarea name="desc" placeholder="desc"></textarea>
            </p>
            <button>제출</button>
          </form>
      </article>
    )
  }
}

export default CreateContent 