import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './Todo/TodoList';
import TodoAdd from './Todo/TodoAdd';
import TodoEdit from './Todo/TodoEdit';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<TodoList />} />
          <Route exact path='/add' element={<TodoAdd />} />
          <Route exact path='/edit/:id' element={<TodoEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
