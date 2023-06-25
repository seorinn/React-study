import {useEffect} from "react";

function Even(){
    useEffect(() => {
        return () => {
            console.log("Even component unmount");
        };
    }, []);
    
    return <div>The current count is even</div>;
}
export default Even;