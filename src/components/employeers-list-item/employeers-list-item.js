import "./employeers-list-item.css";

const EmployeersListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleProp,
    increase,
    rise,
    onSalaryChange,
  } = props;
  let liStyle = "list-group-item d-flex justify-content-between ";
  if (increase) {
    liStyle += " increase";
  }
  if (rise) {
    liStyle += " like";
  }
  return (
    <li className={liStyle}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="increase"
      >
        {name}
      </span>
      <span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={`${salary}`}
          onChange={onSalaryChange}
        />
        $
      </span>
      <div className="d-flex justify-content-center align-items-center ">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleProp}
          data-toggle="rise"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeersListItem;
