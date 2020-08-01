import React from 'react';

// components
import TodoListItem from '../TodoListItem/TodoListItem';

// style
import './TodoList.scss';

const TodoList = ({ todos }) => {

  const todosItems = todos.map(item => {

    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} />
      </li>
    )
  })

  return (
    <ul className="list-group todo-list">
      { todosItems }
    </ul>
  );
}

export default TodoList;
