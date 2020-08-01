import React from 'react';

// components
import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

// style
import './App.scss';

class App extends React.Component {

  state = {
    todoData : [
      { label: 'Drink Coffee', important: false, id: 0},
      { label: 'Make Awesome App', important: true, id: 1},
      { label: 'Have a lunch', important: false, id: 2}
    ]
  }

  onDeleted = (id) => {
    this.setState(({todoData}) => {
      const currentTodoData = todoData.concat();
      const deleteIndex = currentTodoData.findIndex((item) => item.id === id)
      currentTodoData.splice(deleteIndex, 1);

      return {
        todoData: currentTodoData
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={ this.onDeleted } />
      </div>
    );
  }
}

export default App;
