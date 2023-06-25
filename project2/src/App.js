import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
//import {useState} from "react";

function App() {
/*
  const [date, setDate] = useState("");
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
      <TodoEditor/>
      <TodoList/>
    </div>  
  );
  }

export default App;
