import './App.css';
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import {useRef, useEffect, useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const didMountRef=useRef(false);

  useEffect(() => {
    const intervalID = setInterval(() =>{
      console.log("깜빡");
    }, 1000);
    return()=>{
      console.log("clean up");
      clearInterval(intervalID);
    }
    /*
    if(!didMountRef.current){
      didMountRef.current = true;
      return;
    }
    else{
      console.log("component updated")
    }
    */
  });

  useEffect(()=> {
    console.log("component mount");
  }, []);


  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText}/>
      </section>
      <section>
        <Viewer count = {count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>  
  );
  }
export default App;
