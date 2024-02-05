import SkillCard from "./skillCard";
export default function Skills(){
    return(
        <div className='flex flex-col items-start [&>*:nth-child(odd)]:ml-auto [&>*:nth-child(even)]:mr-auto mt-10 gap-5 mx-10'>
            <SkillCard first = "CREATIVE" second = "DEVELOPEMENT"/>
            <SkillCard first = "FRONTEND" second = "DEVELOPEMENT"/>
            <SkillCard first = "BACKEND" second = "DEVELOPEMENT"/>

       </div>
    ); 

}