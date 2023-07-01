import Button from "../component/Button";
import Header from "../component/Header";

const Home = () => {
    return (
        <div>
            <Header
                title={"Home"}
                leftChild={
                    <Button 
                        type="positive"
                        text="positive" 
                        onClick={() => {
                            alert("positive button");
                    }}/>
                }
                rightChild={
                    <Button 
                        type="negative"
                        text="negative" 
                        onClick={() => {
                            alert("negative button");
                    }}/>
                }
            />      
        </div>
    );
};

export default Home;