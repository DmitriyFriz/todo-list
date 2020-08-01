import React from 'react';

// components
import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

// style
import './App.scss';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 0},
    { label: 'Make Awesome App', important: true, id: 1},
    { label: 'Have a lunch', important: false, id: 2}
  ]

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />

      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData}/>
    </div>
  );
}

export default App;
