import EmployeersListItem from "../employeers-list-item/employeers-list-item";

import "./employeers-list.css";

const EmployeersList = ({ data, onDelete, onToggleProp, onSalaryChange }) => {
  const arr = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeersListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
        onSalaryChange={(e) => onSalaryChange(id, e.currentTarget.value)}
      />
    );
  });

  return <ul className="app-list list-group">{arr}</ul>;
};

export default EmployeersList;
