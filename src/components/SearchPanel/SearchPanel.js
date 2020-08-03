import React from 'react';

// style
import './SearchPanel.scss';

class SearchPanel extends React.Component {

  state = {
    term: ''
  }

  searchChange = (event) => {
    const term = event.target.value;
    this.setState({term});
    this.props.searchChange(term);
  }

  render() {

    return <input
      type="text"
      className="form-control search-input"
      placeholder="search"
      value={this.state.term}
      onChange={this.searchChange}
      />;
  }
}

export default SearchPanel;
