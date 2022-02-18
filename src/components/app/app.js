import { Component } from "react/cjs/react.development";
import nextId from "react-id-generator";
import { setPrefix } from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-fiter/app-filter";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";

import "./app.css";

setPrefix("");
class App extends Component {
  state = {
    data: this.puck(),
    term: "",
    dataFilter: "AllEmp",
  };

  puck() {
    let newArr = [];
    const maxElem = Math.max(...Object.keys(localStorage));
    for (let i = 1; i <= maxElem; i++) {
      if (localStorage.getItem(i)) {
        newArr.push(Object.assign({}, localStorage.getItem(i).split(",")));
      }
    }
    const localData = newArr.map((i) => {
      return {
        name: i[0],
        salary: i[1],
        rise: !i[2],
        increase: !i[3],
        id: i[4],
      };
    });
    return localData;
  }

  createItem(salary, name, rise = false, increase = false) {
    let id = nextId("");
    while (localStorage.getItem(id)) {
      id = nextId("");
    }
    localStorage.setItem(id, [name, salary, rise, increase, id]);
    return { name, salary, rise, increase, id };
  }

  deleteItem = (id) => {
    localStorage.removeItem(id);
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  addItem = (salary, name) => {
    const newItem = this.createItem(salary, name);
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          const changeLocalData = { ...item, [prop]: !item[prop] };
          localStorage.setItem(id, Object.values(changeLocalData));
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSerch = (term) => {
    this.setState({ term });
  };

  onChangeFilter = (dataFilter) => {
    this.setState({ dataFilter });
  };

  EmpFilter = (items, dataFilter) => {
    if (dataFilter === "AllEmp") {
      return items;
    }

    if (dataFilter === "RiseEmp") {
      return items.filter((item) => item.rise);
    }

    if (dataFilter === "SalaryEmp") {
      return items.filter((item) => item.salary > 1000);
    }
  };

  onSalaryChange = (id, newSalary) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          const changeLocalData = { ...item, salary: newSalary };
          localStorage.setItem(id, Object.values(changeLocalData));
          return { ...item, salary: newSalary };
        }
        return item;
      }),
    }));
  };

  render() {
    const { data, term, dataFilter } = this.state;
    const numBenefits = this.state.data.filter((item) => item.increase).length;
    const numberOfEmployees = this.state.data.length;
    const visibleData = this.EmpFilter(this.searchEmp(data, term), dataFilter);

    return (
      <div className="app">
        <AppInfo length={numberOfEmployees} benefits={numBenefits} />

        <div className="search-panel">
          <SearchPanel onUpdateSerch={this.onUpdateSerch} />
          <AppFilter
            dataFilter={dataFilter}
            onChangeFilter={this.onChangeFilter}
          />
        </div>

        <EmployeersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onSalaryChange={this.onSalaryChange}
        />
        <EmployeersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
export default App;
