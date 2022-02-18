import { Component } from "react/cjs/react.development";
import "./search-panel.css";

class SearchPanel extends Component {
  state = {
    term: "",
  };

  onUpdateSerch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSerch(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onUpdateSerch}
      />
    );
  }
}

export default SearchPanel;
