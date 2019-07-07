import React, {
  useState
} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ToDo from './component/ToDo';
import InputForm from './component/InputForm';

function App() {
  const [todo, setTodo] = useState([{
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
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
    > {
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
    InputForm addTodo = {
      addTodo
    }
    /> <
    />
  );
}

export default App;