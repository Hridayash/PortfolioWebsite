
import { AiOutlineMenu } from "react-icons/ai";


export default function Navigation(){
    const date = new Date()

    return(
        <nav>
            <h1 className="fixed top-10 left-10">
                HP
            </h1> 
            <div className="bg-black text-white h-10 w-32 flex justify-center items-center p-2 fixed top-10 right-10">
                {date.toLocaleTimeString([], {hour:"2-digit", minute: "2-digit"})}
            </div>
            <button className="h-10 w-10 bg-black text-white rounded-full flex justify-center items-center fixed bottom-10 right-10 font-extralight">
                <AiOutlineMenu/>
            </button> 
            

        </nav>

    );
}