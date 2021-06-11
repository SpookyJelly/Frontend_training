import React, {useState} from 'react'
import Titlebar from './Titlebar.js'
import InputForm from './InputForm.js'
import TODOS from './TODOS.js'


// 처음 로드 될 때 localStorage에서 불러오고 싶으니까... Effect Hook를 사용한다


function Container (){

  const [Todos, setTODOS] = useState([])
  
  // 최대 인덱스 체크를 위해 Container에서 최대 인덱스를 관리한다.
  const [max_idx, setmaxidx] = useState(0)
  
    // props로 내려가기 전에 짐을 싸고 내려간다. Todos는 캡쳐 된 상태라고 생각해라
    // 그래서 InputForm에서는 Todos가 뭔지 모르지만, 조회해서 사용할 수 있는것.
    // scoped 된 것이다. 추상화가 되었다고 생각하야하나?
  function addTODOS(newTODO,id){
    const TODO_ARRAY = Todos
    setmaxidx(id+1)
    setTODOS([...TODO_ARRAY, {'TODO' : newTODO, 'id':id}])
  }

  function getTODOS(){
    const TODO_ARRAY = Todos
    return TODO_ARRAY
  }

  return(
    <div className="container">
      <Titlebar/>
      <InputForm
        max_idx={max_idx}
        addTODOS={addTODOS}
      />
      <hr></hr>
      <TODOS
        getTODOS={getTODOS}
      ></TODOS>
    </div>

  )
}
export default Container