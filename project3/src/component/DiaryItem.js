import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";
import { getEmotionImgById } from "../util";
import Button from "./Button";
import React from "react";

const DiaryItem = ({id, date, content, emotionId}) => {
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/diary/${id}`);
    }
    const goEdit = () => {
        navigate(`/edit/${id}`);
    }
    return (
        <div className="DiaryItem">
            <div
            onClick={goDetail}
            className={["img_section", `img_section_${emotionId}`].join(" ")}
            >
                <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)} />    
            </div>    
            <div onClick={goDetail} className="info_section">
                <div className="date_wrapper">
                    {new Date(parseInt(date)).toLocaleDateString()}
                </div>
                <div className="content_wrapper">{content.slice(0,25)}</div>
            </div>
            <div className="button_section">
                <Button text="수정하기" onClick={goEdit}/>
            </div>
        </div>
    );
}

export default React.memo(DiaryItem);