import Editor from "../component/Editor";

const Home = () => {
    return (
        <div>
            <Editor
                onSubmit={() => {
                    alert(("작성이 완료되었습니다"));
                }}   
            />      
        </div>
    );
};

export default Home;