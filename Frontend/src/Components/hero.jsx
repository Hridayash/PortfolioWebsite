import { BsArrowDownCircle } from "react-icons/bs";
export default function Hero(){
    return(
        <div className="flex justify-center items-center  flex-col mt-60">
            <p className="font-sans text-xs font-normal">Hridayash Pariyar</p>
            <h1 className="font-sans font-extrabold text-9xl">CODE-</h1>
            <h1 className="font-sans font-extrabold text-9xl">CREATE</h1>
            <h1 className="font-sans font-extrabold text-9xl">CONQURE</h1>

            <div className="text-8xl font-light  mt-20"><BsArrowDownCircle /></div>
        </div>
    );
}