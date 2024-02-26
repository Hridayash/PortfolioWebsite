export default function Details(){

    const detailsText = "text-3xl sm:text-4xl md:text-5xl font-light text-center";
    return(
        <div className="flex flex-col justify-center items-center mx-10 my-32 gap-32 ">
            <h1 className={detailsText}>
                A SEASONED WEB DEVELOPER AND <span className="font-bold">SOFTWARE ENGINEER</span>  KNOWN FOR MY UNWAVERING COMMITMENT TO EXCELLENCE AND INNOVATE <span className="font-bold">PROBLEM SOLVING</span>.
            </h1>
            <h1 className={detailsText}>
            I EXCEL IN <span className="font-bold">COLLABORATIVE ENVIRONMENTS</span> AND AM DRIVEN BY THE PURSUIT OF DELIVERING <span className="font-bold">SOPHISTICATED SOLUTIONS </span>THAT ALIGN WITH THE HIGHEST STANDARDS OF QUALITY AND USER SATISFACTION.

            </h1>

        </div>
    );
}