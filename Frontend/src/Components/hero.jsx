import { BsArrowDownCircle } from "react-icons/bs";
export default function Hero(){

    const bigText ="font-sans font-extrabold text-6xl sm:text-8xl md:text-9xl"
    return(
        <div className="flex justify-center items-center  flex-col mt-60 ">
            <p>Hridayash Pariyar</p>
            <h1 className={bigText}>CODE</h1>
            <h1 className={bigText}>CREATE</h1>
            <h1 className={bigText}>CONQURE</h1>

            <div className="text-8xl font-light mt-20 animate-bounce"><BsArrowDownCircle /></div>
        </div>
    );
}
