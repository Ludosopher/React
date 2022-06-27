import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Customers = () => {
    const customers = useSelector(state => state.customers.customers);
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const deleteCustomer = (id) => {
        dispatch({type: 'DELETE_CUSTOMER', payload: id });
    }
    const addCustomer = () => {
        const obj = {
            id: Math.random(),
            name: name
        }
        dispatch({type: 'ADD_CUSTOMER', payload: obj }); 
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }

  return (
    
    <div>
      Customers
      <input value={name} onChange={handleChange} type="text" />
      <button onClick={addCustomer}>Добавить клиента</button>
      {customers.map((customer) => (
        <div key = {customer.id}>
            <b>{customer.name}</b>
            <button onClick={() => deleteCustomer(customer.id)}>x</button>
        </div>

      ))}
    </div>
    
  );
}

export default Customers;