import React, {useState} from 'react'

function InputForm(props){

  const [textInput, setInput] = useState('')
  function onSubmit(e){
    e.preventDefault()
    if(textInput.length <=0){return}
    props.addTODOS(textInput,props.max_idx)
    resetInput()

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