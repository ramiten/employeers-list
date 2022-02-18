import "./app-info.css";

const AppInfo = ({ length, benefits }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в нашей компании</h1>
      <h2>Общее число сотрудников: {length}</h2>
      <h2>Премию получат: {benefits}</h2>
    </div>
  );
};

export default AppInfo;
