import React, { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, loader, err } from '../redax/redusers/todosReduser/todosSelector';
import { loadTodos } from '../redax/redusers/todosReduser/todosReduser';

const AboutPage = () => {
    
    const todos = useSelector(getTodos);
    const dispatch = useDispatch();
    const loading = useSelector(loader);
    const error = useSelector(err);
    useEffect(() => {
        dispatch(loadTodos());   
    }, []);

    if (loading) {
        return (
            <div>Идёт загрузка ...</div>
        )
    }

    if (error) {
        return (
            <div>Произошла ошибка</div>
        )
    }
    
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h2>{todo.title}</h2>
                </div>
            ))}
        </div>

    );
}

export default AboutPage;