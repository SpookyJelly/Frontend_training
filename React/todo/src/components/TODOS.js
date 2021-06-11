import React from 'react'

function TODOS (props){
  const TODOS = props.getTODOS()

  const clickHandler = (params,e) =>{
    console.log(params)
    console.log(e)
  }

  // 각 항목마다 이렇게 li 태그 붙이고 싶으면 return 직전에 조치해서 쏴줘야한다.
  // 이건 JSX이므로, 태그 씌워줄때도 딱히 ``로 감싸줄 필요도 없다.
  const listItems = TODOS.length >0 ? 
      
    TODOS.map(Item => 
      <li key={Item.id}>
        {Item.TODO}
        <button 
          className="delTODO"
          // onClick은 하나의 파라미터만 전달하기 때문에, 2개 이상의 인자를 전달하려면 아래와 같이
          // 화살표 함수로 원래 부르려던 함수를 감싸고, 해당 함수의 호출부에서 인자를 넘긴다.
          onClick={e => clickHandler(Item.id,e)}
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