import React, {
  useState
} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ToDo from './component/ToDo';
import InputForm from './component/InputForm';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {

  const cardStyle = {
    width: '50%',
    margin: 'auto',
  }

  const [todo, setTodo] = useState([{
      text: "Learn React",
      isCompleted: false,
    },
    {
      text: "Learn Data-structure",
      isCompleted: false,
    },
    {
      text: "Learn React with flux and Redux",
      isCompleted: false,
    }
  ]);

  const addTodo = (text) => {
    const newTodo = [...todo, {
      text: text,
      isCompleted: false
    }];
    setTodo(newTodo);
  }

  const markCompleted = (index) => {
    const newTodo = [...todo];
    newTodo[index].isCompleted = true;
    setTodo(newTodo);
  }

  const deleteToDo = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }

  return ( <
    div className = "card mt-3"
    style = {
      cardStyle
    } >
    <
    div class = "card-header" >
    <
    i className = "glyphicon glyphicon-ok" / >
    <
    h1 > ToDo List < /h1> <
    /div> <
    ul className = "list-group list-group-flush" > {
      todo.map((todo, index) => ( <
        ToDo key = {
          index
        }
        todo = {
          todo
        }
        index = {
          index
        }
        deleteToDo = {
          deleteToDo
        }
        markCompleted = {
          markCompleted
        }
        />
      ))
    } <
    li class = "list-group-item" > < InputForm addTodo = {
      addTodo
    }
    /></li >
    <
    /ul> <
    /div>
  );
}

export default App;