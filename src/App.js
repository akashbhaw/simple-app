
import './App.css';

function App() {
  return (
    <div id="root">
    <div className="main_container">
      <button className="horizontal" disabled={true}>
        Up
      </button>
      <div className="container">
        <button className="vertical" disabled={true}>
          {" "}
          Left
        </button>
        <div className="main">
          <div className="box" style={{ left: 0, top: 0 }}></div>
        </div>
        <button className="vertical">Right</button>
      </div>
      <button className="horizontal">Bottom</button>
    </div>
  </div>
  
  );
}



export default App;
