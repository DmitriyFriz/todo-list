import React from 'react';

// style
import './ItemAddForm.scss'

class ItemAddForm extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget
    const input = form['input-add'];
    const text = input.value;
    if (text.length) {
      this.props.addItem(text);
      form.reset();
    }
  }

  render(){
    return (
      <form className="item-add-form d-flex"
        autoComplete="off"
        onSubmit={this.onSubmit}>
        <input className="form-control"
          type="text"
          name="input-add"
          placeholder="add done"/>
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
};

export default ItemAddForm;
