import Opticare from "./opticare";
import PortfolioCard from "./portfolioCard";

export default function Portfolio(){
    return(
        <>
            <h1 className="text-6xl md:text-9xl font-semibold text-center m-10">SELECTED WORKS</h1>
            <PortfolioCard name1 = "GROW" name2 = "PRO"/>
            <Opticare />
           

        </>
    );
}