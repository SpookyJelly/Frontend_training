import React, {useEffect, useState} from 'react'
import Titlebar from './Titlebar.js'
import InputForm from './InputForm.js'
import TODOS from './TODOS.js'


// 처음 로드 될 때 localStorage에서 불러오고 싶으니까... Effect Hook를 사용한다


function Container (){

  // todos의 상태 관리 
  const [todos, setTodos] = useState([])
  // 최대 인덱스 체크를 위해 Container에서 최대 인덱스를 관리한다.
  // 이제 필요 없다. uuid 쓰기 때문에
  // const [maxIdx, setmaxidx] = useState(0)

  
  function addTodo(newTodo,id,completed){
    // setmaxidx(id+1)
    setTodos([...todos, {'TODO' : newTodo, 'id':id,completed:completed}])
    // setTodos(todos =>[...todos, {'TODO' : newTodo, 'id':id}]) // 이런식으로 비동기적으로 호출해서 setTodos 하는 순간에 todos를 가져올 수 있다
  }
  
  // props로 내려가기 전에 짐을 싸고 내려간다. Todos는 캡쳐 된 상태라고 생각해라
  // 그래서 InputForm에서는 Todos가 뭔지 모르지만, 조회해서 사용할 수 있는것.
  // scoped 된 것이다. 추상화가 되었다고 생각하야하나?

  //TODO: localStorage에서 todos 불러오기 --> Effect 훅 단계에서

  useEffect(()=>{
    const TODOS = localStorage.getItem('TODOS')
    if(TODOS===null){
      localStorage.setItem('TODOS','[]') // 배열안에 객체들을 저장할꺼니까, 배열 껍대기를 문자열로 셋팅한다
    } else{
      const parseTODOS = JSON.parse(TODOS)
      setTodos(parseTODOS)
    }
  },[]) // useEffect의 두번째 인자로 빈배열을 넘기면 렌더링 되는 한번만 호출되고, 이후 호출 안됨
  // 2번째 인자 안에 여러 배열을 넘기면 해당 state의 값이 변경될 때만 useEffect가 호출
  // 2번째 인자를 별도로 설정하지 않으면 componentDidUpdate, componentDidMount와 동일

  function getTodos(){
    return todos
  }

  function delTodos(id){
    // parameter로 들어온 id를 임시로 todoId로 호칭한다.
    // filter를 통해서 id !== todoId인 녀석만 골라서 (click한 녀석의 아이디와 다른 녀석들만) 하나의 배열로 반환한다.
    const result = todos.filter(({id: todoId})=>id !==todoId)
    const stringTodo = JSON.stringify(result)
    localStorage.setItem('TODOS',stringTodo)


    // 필터를 통해 만든 result라는 배열을 setTODOS를 사용하여 state를 갱신한다.
    setTodos(result)
  }

  return(
    <div className="container">
      <Titlebar/>
      <InputForm
        addTodo={addTodo}
      />
      <hr></hr>
      <TODOS
        getTodos={getTodos}
        delTodos={delTodos}
      ></TODOS>
    </div>

  )
}
export default Container