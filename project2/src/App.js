import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import {useState, useRef} from "react";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    context: "Study React",
    createdDate: new Date().getTime(),    
  },
  {
   id: 1,
   isDone: false,
   context: "Do Laundry",
   createdDate: new Date().getTime(),    
  },
  {
   id: 2,
   isDone: false,
   context: "Practice to Sing",
   createdDate: new Date().getTime(),    
  }
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current, 
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  }

/*
  const [text, setText] = useState("새로운 Todo...");
  const [search, setSearch] = useState("검색어를 입력하세요");

  const handleSetDate = (e) => {
    setDate(e.target.value);
  };
  const handleSetText = (e) => {
    setText(e.target.value);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const handleAddItem = () =>{
    TodoItem()
  }
*/
  return (
    <div className="App">
      {/* <section>
        <Header date = {date} handleSetDate = {handleSetDate}/>
      </section>
      <section>
        <TodoEditor text = {text} handleSetText = {handleSetText} handleAddItem = {handleAddItem}/>
        
        //{count %2 === 0 && <Even />}
      </section>
      <section>
        <TodoList search = {search} handleSearch = {handleSearch}/>
      </section> */}
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList/>
    </div>  
  );
  }

export default App;
