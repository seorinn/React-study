import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
// import TestComp from './component/Testcomp';
import {useCallback, useRef, useReducer} from "react";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "Study React",
    createdDate: new Date().getTime(),    
  },
  {
   id: 1,
   isDone: false,
   content: "Do Laundry",
   createdDate: new Date().getTime(),    
  },
  {
   id: 2,
   isDone: false,
   content: "Practice to Sing",
   createdDate: new Date().getTime(),    
  }
];

function reducer(state, action){
  switch(action.type){
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              isDone: !it.isDone,
          }
        : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);   
    }
    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);
  const onCreate = (content) => {
    // const newItem = {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current, 
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    // setTodo([newItem, ...todo]);
    idRef.current += 1;
  }
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
    // setTodo(
    //   todo.map((it) => 
    //       it.id === targetId ? { ...it, isDone: !it.isDone } : it
    //   )
    // );
  }, []);
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
    // setTodo(todo.filter((it) => it.id !== targetId));   
  }, []);

  return (
    <div className="App">
      {/* <TestComp/> */}
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate = {onUpdate} onDelete = {onDelete}/>
    </div>  
  );
}

export default App;
