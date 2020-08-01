import React from 'react';

// components
import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 0},
    { label: 'Make Awesome App', important: true, id: 1},
    { label: 'Have a lunch', important: false, id: 2}
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  );
}

export default App;
