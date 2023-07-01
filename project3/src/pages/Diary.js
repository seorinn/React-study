import {useParams} from "react-router-dom";

const Diary = () => {
    const { id } = useParams();
    return (
        <div>
            <div>Diary: { id }</div>
            <div>Diary</div>
        </div>
    )
}

export default Diary;