import React from 'react';

// components
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {

  const todosItems = todos.map(item => {

    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <TodoListItem {...itemProps} />
      </li>
    )
  })

  return (
    <ul>
      { todosItems }
    </ul>
  );
}

export default TodoList;
