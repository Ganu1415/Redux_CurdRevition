import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { updateTodo } from './TodoSlice';

const TodoEdit = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const neaviget = useNavigate();
    // console.log(pathname);
    const todoId = parseInt(pathname.replace("/edit/:", ""))
    console.log(todoId);
    const tododata = useSelector(state => state.Todo.Todo_info.find(e => e.id == todoId))
    console.log(tododata)
    const [todo, settodo] = useState({
        id: tododata.id,
        name: tododata.name,
        email: tododata.email
    })
    const getdata = (e) => {
        settodo({ ...todo, [e.target.name]: e.target.value })
    }
    const submitTodo = (e) => {
        e.preventDefault();
        console.log(todo);
        dispatch(updateTodo(todo))
        neaviget('/')
    }
    return (
        <>
            <div className='m-3'>
                <h3>TodoAdd</h3>
            </div>
            <div>
                <form onSubmit={submitTodo}>
                    <div className='m-1'>
                        <label>
                            Id: <input type="text" name="id" value={todo.id} onChange={getdata} />
                        </label>
                    </div>
                    <div className='m-1'>
                        <label>
                            Name: <input type="text" name="name" value={todo.name} onChange={getdata} />
                        </label>
                    </div>
                    <div className='m-1'>
                        <label>
                            Email: <input type="text" name="email" value={todo.email} onChange={getdata} />
                        </label>
                    </div>
                    <div className='m-1'>
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TodoEdit