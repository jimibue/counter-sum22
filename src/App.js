import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="container">
      <h1 className="title">Counter Example</h1>
      <div className="counters">
        {/* {TODO:RENAME ISOVER} */}
        
       <Counter name='Steps' goal={{value: 10, unit:'steps', isOver:true }} />    
       <Counter name='ScreenTime' goal={{value:3, unit:'minutes', isOver:false}} />    
       <Counter name='Exercise' goal={{value:30, unit:'minutes', isOver:true}} />    
      </div>
    </div>
  );
}

export default App;
