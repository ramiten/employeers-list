import "./employeers-add-form.css";
import { Component } from "react";

class EmployeersAddForm extends Component {
  state = {
    salary: "",
    name: "",
  };

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { salary, name } = this.state;
    this.props.onAdd(salary, name);

    this.setState({
      name: "",
      salary: "",
    });
  };

  onKeyDownNumber(event) {
    if (
      isNaN(String.fromCharCode(event.keyCode)) &&
      event.keyCode !== 8 &&
      event.keyCode !== 46
    ) {
      return event.preventDefault();
    }
  }

  onKeyDownText(event) {
    if (
      !isNaN(String.fromCharCode(event.keyCode)) &&
      event.keyCode !== 8 &&
      event.keyCode !== 46
    ) {
      return event.preventDefault();
    }
  }

  render() {
    const { salary, name } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            required
            minLength="3"
            value={name}
            onKeyDown={this.onKeyDownText}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            required
            value={salary}
            onKeyDown={this.onKeyDownNumber}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeersAddForm;
