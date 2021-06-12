import React from 'react'

function TODOS (props){
  const TODOS = props.getTodos()

  function fetchlocalTODO(updatedItem){
    const localTODOS = localStorage.getItem('TODOS')
    const localparsedTODO = JSON.parse(localTODOS)
    // map은 배열의 모든 요소에 대해 콜백 함수를 실행 시킨 뒤 그 return으로 이루어진 결과 배열을 반환
    // forEach는 애초에 반환이 없는 놈임. 함수 실행의 결과로 뭘 하려고 하면 map이 맞다
    // filter는 주어진 함수의 return이 true인 요소들만 모아 새로운 배열로 만든다. (filter는 요소 전체에 뭔가 적용해 바꾼다는 느낌은 아님)
    const result = localparsedTODO.map((Item)=>{
      if(Item.id === updatedItem.id){
        Item = {...updatedItem}
      }
      return Item
    })
    localStorage.setItem('TODOS',JSON.stringify(result))

  }

  function checkTODO(e,Item){
    const target = e.target
    target.classList.toggle('completed')
    Item.completed = !Item.completed
    fetchlocalTODO(Item)
  }

  const clickHandler = (id) =>{
    props.delTodos(id)
  }

  // 각 항목마다 이렇게 li 태그 붙이고 싶으면 return 직전에 조치해서 쏴줘야한다.
  // 이건 JSX이므로, 태그 씌워줄때도 딱히 ``로 감싸줄 필요도 없다.
  const listItems = TODOS.length >0 ? 
      
    TODOS.map(Item => 
      <li 
        key={Item.id}
        onClick={(e)=> checkTODO(e,Item)}
        className= {Item.completed === true ? 'completed': ''}
        >
        {Item.TODO}
        <button 
          className="delTODO"
          // onClick은 하나의 파라미터만 전달하기 때문에, 2개 이상의 인자를 전달하려면 아래와 같이
          // 화살표 함수로 원래 부르려던 함수를 감싸고, 해당 함수의 호출부에서 인자를 넘긴다.
          onClick={() => clickHandler(Item.id)}
          >X
        </button>
      </li>) : 
      
      <div className="noTODO">
        <p>오늘의 할 일이 없습니다.</p>
      </div>



  return (
    <div className="TODO__container">
      <ol>
        {listItems}
      </ol>
    </div>
  )
}
export default TODOS