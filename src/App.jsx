import './App.css';
import {useSelector, useDispatch} from 'react-redux';


function App() {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    
    <div>
      {count}
      <button onClick={() => dispatch({type: 'plus'})}>+</button>
      <button onClick={() => dispatch({type: 'minus'})}>-</button>
    </div>
    
  );
}

export default App;
