import { RxArrowRight } from "react-icons/rx";

export default function SectionHeading({title,link}){
    return(
        <>
        <div className="flex justify-between items-center mx-10 text-xl font-light my-8">
            <h1>{title}</h1>
            <div className="flex justify-center items-center"><h1>{link}</h1> <RxArrowRight/></div>
            
        </div>
        <hr className="border-1 border-black mx-10"/>
        </>
    );
}