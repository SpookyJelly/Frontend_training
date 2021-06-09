import React, { Component } from 'react'

class TOC extends Component{
  render(){
    const data = this.props.data
    const list = []
    let i = 0
    while (i<data.length){
      list.push(
        <li key={data[i].id}>
          <a 
            href = {"./content/"+data[i].id}
            data-id = {data[i].id}
            onClick={(e)=>{
              e.preventDefault()
              this.props.onChangePage(e.target.dataset.id)
            }}
            >
            {data[i].title}</a></li>)
      i+=1
    }
    return(
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    )
  }
}
export default TOC
