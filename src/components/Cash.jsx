import { useSelector, useDispatch } from 'react-redux';



const Cash = () => {

  const cash = useSelector(state => state.cash.cash);
  const dispatch = useDispatch();
  const addCash = (value) => {
    dispatch({type: 'ADD_CASH', payload: value });
  }
  const getCash = (value) => {
    dispatch({type: 'GET_CASH', payload: value });
  }
  
  return (
    
    <div>
      {cash}
      <button onClick={()=>addCash(Number(prompt()))}>Пополнить счёт</button>
      <button onClick={()=>getCash(Number(prompt()))}>Снять со счёта</button>
    </div>
    
  );
}

export default Cash;