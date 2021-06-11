import React, {useState} from 'react'
import Titlebar from './Titlebar.js'
import InputForm from './InputForm.js'
import TODOS from './TODOS.js'


// 처음 로드 될 때 localStorage에서 불러오고 싶으니까... Effect Hook를 사용한다


function Container (){

  const [todos, setTodos] = useState([])
  
  // 최대 인덱스 체크를 위해 Container에서 최대 인덱스를 관리한다.
  const [maxIdx, setmaxidx] = useState(0)
  
  function addTodo(newTodo,id){
    setmaxidx(id+1)
    setTodos([...todos, {'TODO' : newTodo, 'id':id}])
  }
  
  // props로 내려가기 전에 짐을 싸고 내려간다. Todos는 캡쳐 된 상태라고 생각해라
  // 그래서 InputForm에서는 Todos가 뭔지 모르지만, 조회해서 사용할 수 있는것.
  // scoped 된 것이다. 추상화가 되었다고 생각하야하나?

  function getTodos(){
    return todos
  }

  function delTodos(id){
    // parameter로 들어온 id를 임시로 todoId로 호칭한다.
    // filter를 통해서 id !== todoId인 녀석만 골라서 (click한 녀석의 아이디와 다른 녀석들만) 하나의 배열로 반환한다.
    const result = todos.filter(({id: todoId})=>id !==todoId)

    // 필터를 통해 만든 result라는 배열을 setTODOS를 사용하여 state를 갱신한다.
    setTodos(result)
  }

  return(
    <div className="container">
      <Titlebar/>
      <InputForm
        maxIdx={maxIdx}
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