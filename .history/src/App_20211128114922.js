import logo from './logo.svg';
import './App.css';
import './styles.css'

function App() {
  const [state, dispatch] = useReducer(reducer,())
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previus-operand"></div>
        <div className="current-operand"></div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>,</button>
    </div>
  );
}

export default App;
