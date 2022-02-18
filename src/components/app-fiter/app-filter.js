import "./app-filter.css";

const AppFilter = ({ onChangeFilter, dataFilter }) => {
  const buttons = [
    { name: "AllEmp", label: "Все сотрудники" },
    { name: "RiseEmp", label: "Сотрудники на повышение" },
    { name: "SalaryEmp", label: "З/П больше 1000" },
  ];

  const buttonsElem = buttons.map(({ name, label }) => {
    const active = dataFilter === name ? "btn-light" : "btn-outline-light";
    return (
      <button
        className={`btn ${active}`}
        type="button"
        onClick={() => onChangeFilter(name)}
        key={name}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttonsElem}</div>;
};

export default AppFilter;
