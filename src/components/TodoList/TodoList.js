import React from 'react';

// components
import TodoListItem from '../TodoListItem/TodoListItem';

// style
import './TodoList.scss';

const TodoList = ({ todos, onDeleted }) => {

  const todosItems = todos.map(item => {

    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { todosItems }
    </ul>
  );
}

export default TodoList;
