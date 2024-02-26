export default function SkillCard({first, second}){
    return(
        <div>
            <h1 className="text-5xl md:text-9xl font-medium">{first}</h1>
            <h1 className="text-5xl md:text-9xl font-medium">{second}</h1>
        </div>
    );

}