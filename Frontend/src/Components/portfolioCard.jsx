import bg from "../assets/bg.jpg"
import game from "../assets/game.jpg"





export default function PortfolioCard(){
    return(
        <>
        <div className="relative flex flex-col  mb-[100px] mx-10 ">
            
  
            <div className="md:text-[20vw] sm:text-[25vw] text-[30vw] overflow-hidden font-extrabold leading-[80%] sm:leading-[90%] md:leading-[105%] my-0 ">
                 <h1>PRO<br />JECT</h1>
                 
            </div>
           
            <div className=" absolute w-[35vw] left-[45%] top-[100px] z-[100] flex flex-col justify-center items-center rounded-md h-[80%]" style={{ backgroundImage: `url(${bg})` }}>
                {/* <img src={bg} className="h-96 w-72 rounded-lg relative"/> */}
                <div className="absolute top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] w-[80%]"><img src={game} className=" rounded-lg  "/> </div>
                 
            </div>
             
            <p className="text-[2vw]">The not So Perfect Project</p>
        </div>
       

        </>

    );
}