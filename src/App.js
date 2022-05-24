import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="container">
      <h1 className="title">Counter Example</h1>
      <div className="counters">
       <Counter name='Steps' goal={10000} />    
       <Counter name='ScreenTime' goal={8} />    
      </div>
    </div>
  );
}

export default App;
