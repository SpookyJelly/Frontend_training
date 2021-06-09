import React, {Component} from 'react'

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>
          <a 
          href="/" 
          onClick={function(e){
            e.preventDefault()
            this.props.onChangePage() // 상위 컴포에서 props로 전달해주는거니까 props로 한다.
        }.bind(this)}>{this.props.title}</a></h1>
        <p>{this.props.sub}</p>
      </header>

    )
  }
}
export default Subject