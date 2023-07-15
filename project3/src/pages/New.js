import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import { setPageTitle } from "../util";

const New = () => {
    const {onCreate} = useContext(DiaryDispatchContext);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    useEffect(() => {
        setPageTitle("새 일기 쓰기");
    })

    const onSubmit = (data) => {
        alert("작성을 완료했습니다!");
        const { date, content, emotionId } = data;
        onCreate(date, content, emotionId);
        navigate("/", {replace: true});
    };

    return (
        <div>
            <Header 
                title="새 일기 쓰기"
                leftChild={<Button text="< 뒤로 가기" onClick={goBack}></Button>}    
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    )
}

export default New;