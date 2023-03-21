import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { todoAdd } from './TodoSlice';

const TodoAdd = () => {
    const dispatch = useDispatch();
    const neaviget = useNavigate();
    const [todo, settodo] = useState({
        id: '',
        name: '',
        email: ''
    })
    const getdata = (e) => {
        settodo({ ...todo, [e.target.name]: e.target.value })
    }
    const submitTodo = (e) => {
        e.preventDefault();
        console.log(todo);
        dispatch(todoAdd(todo))
        neaviget('/')
    }
    return (
        <>
            <div className='m-3'>
                <h3>TodoAdd</h3>
            </div>
            <div>
                <form onSubmit={submitTodo}>
                    <div>
                        <label>
                            Id: <input type="text" name="id" value={todo.id} onChange={getdata} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Name: <input type="text" name="name" value={todo.name} onChange={getdata} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email: <input type="text" name="email" value={todo.email} onChange={getdata} />
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TodoAdd