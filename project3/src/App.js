import './App.css';
import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch(targetEmotionId){
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
}

function App() {
  return (
    <div className="App">
      <h1>감정 일기장</h1>
      <img alt = "emotion1" src = {getEmotionImgById(1)}/>
      <img alt = "emotion2" src = {getEmotionImgById(2)}/>
      <img alt = "emotion3" src = {getEmotionImgById(3)}/>
      <img alt = "emotion4" src = {getEmotionImgById(4)}/>
      <img alt = "emotion5" src = {getEmotionImgById(5)}/>
    </div>
  );
}

export default App;
