import React from 'react';
import ReactDOM from 'react-dom';

// components
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';

const root = document.getElementById('root');

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

ReactDOM.render(<App />, root);
