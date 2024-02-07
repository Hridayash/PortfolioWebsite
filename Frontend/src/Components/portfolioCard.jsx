import bg from "../assets/bg.jpg"
import game from "../assets/game.jpg"
export default function PortfolioCard(){
    return(
        <>
        <div className="relative min-h-screen  w-full">
            
  
            <h1 className="text-9xl font-extrabold absolute bottom-0 left-10 ">CLASSIC <br/>GAME</h1>
            <span className=" w-72 h-96 absolute bottom-0 left-2/4 top-32 flex flex-col justify-center items-center rounded-md" style={{ backgroundImage: `url(${bg})` }}>
                {/* <img src={bg} className="h-96 w-72 rounded-lg relative"/> */}
                <img src={game} className=" rounded-lg w-96 h-48  "/>  
            </span>
             
            <p className="text-left absolute bottom-0 right-10">THE DESCRIPTION OF THE CLASSIC <br/>GAME ARE AS FOLLOW AND I DONT <br/>KNOW WHAT TO SAY</p>
        </div>
       

        </>

    );
}