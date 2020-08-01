import React from 'react';

//style
import './TodoListItem.scss';

const TodoListItem = ( { label, important = false } ) => {

  const style = {
    color: important ? 'red' : 'black',
  }

  return <span style={style} className="todo-list-item">{ label }</span>
}

export default TodoListItem;
