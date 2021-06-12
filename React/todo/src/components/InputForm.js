import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

function InputForm(props){

  const [textInput, setInput] = useState('')
  
  function onSubmit(e){
    e.preventDefault()
    if(textInput.length <=0){return}
    // props.addTodo(textInput,props.maxIdx)
    const id = uuidv4()
    props.addTodo(textInput,id,false)

    const data = {id:id,TODO: textInput,completed:false}
    // localStorage에 저장.
    handleLocalStorage(data)
    resetInput()
  }
  function handleLocalStorage(data){
    const TODOS = localStorage.getItem('TODOS')
    const parseTODOS = JSON.parse(TODOS)
    const updatedTODOS = parseTODOS.concat(data)

    localStorage.setItem('TODOS',JSON.stringify(updatedTODOS))
  }

  function listenInput(e){
    setInput(e.target.value)
  }

  function resetInput(){
    const Input = document.querySelector('input')
    Input.value = ''
    setInput('')
  }

  return(
    <div className="InputForm">
      <form onSubmit={onSubmit}>
        <input type='text' onChange={listenInput} placeholder='오늘의 할 일은?' autoFocus></input>
        <button type="submit" className="create-button"> 입력 </button>
      </form>
    </div>
  )
}

export default InputForm