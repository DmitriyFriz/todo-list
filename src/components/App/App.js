import React from 'react';

// components
import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm'

// style
import './App.scss';

class App extends React.Component {

  maxId = 0;

  state = {
    todoData : [
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
      this.createTodoItem('Drink coffee'),
    ],
    term : '',
    filter: 'all' // all, active, done
  }

  createTodoItem(label){
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deletedItem = (id) => {
    this.setState(({todoData}) => {
      const currentTodoData = todoData.concat();
      const deleteIndex = currentTodoData.findIndex((item) => item.id === id)
      currentTodoData.splice(deleteIndex, 1);

      return {
        todoData: currentTodoData
      }
    });
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({todoData}) => {
      const newTodoData = todoData.concat(newItem);

      return {
        todoData: newTodoData
      }
    });
  }

  toggleProperty = (arr, id, propName) => {
    const index = arr.findIndex((item) => item.id === id);

    const oldItem = arr[index];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    const newTodoData = [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ]

    return newTodoData
  }

  toggleDone = (id) => {
    this.setState(({ todoData }) =>{
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  }

  toggleImportant = (id) => {
    this.setState(({ todoData }) =>{
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  }

  searchChange = (term) => {
    this.setState({ term });
  }

  filterChange = (filter) => {
    this.setState({filter});
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label
        .toLowerCase()
        .includes(term.toLowerCase());
    })
  }

  filter(items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }


  render() {

    const { todoData, term, filter } = this.state;
    const done = todoData.filter((item) => item.done).length;
    const toDo = todoData.length - done;

    const filterItems = this.filter(todoData, filter)
    const visibleItems = this.search(filterItems, term);

    return (
      <div className="todo-app">
        <AppHeader toDo={toDo} done={done} />

        <div className="top-panel d-flex">
          <SearchPanel searchChange={this.searchChange}/>
          <ItemStatusFilter
            filter={filter}
            filterChange={this.filterChange} />
        </div>

        <TodoList
          todos={visibleItems}
          deletedItem={ this.deletedItem }
          toggleDone={ this.toggleDone }
          toggleImportant={ this.toggleImportant } />

        <ItemAddForm addItem={ this.addItem }/>
      </div>
    );
  }
}

export default App;
