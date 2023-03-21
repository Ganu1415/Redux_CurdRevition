import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletepost } from './TodoSlice';

const TodoList = () => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.Todo.Todo_info)
    console.log(todo);
    // delete data from state
    const deleteTodo = (id) => {
        // console.log(id);
        dispatch(deletepost(id))
    }
    return (
        <>
            <div className='m-5'>
                <Link to={'/add'}>
                    <button type="button" className="btn btn-primary">Primary</button>
                </Link>
            </div>
            <div>
                <h3>TodoList</h3>
            </div>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todo.length > 0 && todo.map((itam, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{itam.id}</td>
                                        <td>{itam.name}</td>
                                        <td>{itam.email}</td>
                                        <td>
                                            <button type="button" className="btn btn-danger m-2" onClick={() => deleteTodo(itam.id)}>Delete</button>
                                            <Link to={`/edit/:${itam.id}`}>
                                                <button type="button" className="btn btn-info m-2">Update</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TodoList