import PortfolioCard from "./portfolioCard";

export default function Portfolio(){
    return(
        <>
            <h1 className="text-6xl md:text-9xl font-semibold text-center m-10">SELECTED WORKS</h1>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>

        </>
    );
}