import React, { useEffect, useState } from 'react';
import bg from "../assets/bg.jpg";
import game from "../assets/opticare.gif";

export default function Opticare() {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="relative flex flex-col mb-[100px] mx-10">
                <div className="md:text-[20vw] sm:text-[25vw] text-[30vw] overflow-hidden font-extrabold leading-[80%] sm:leading-[90%] md:leading-[105%] my-0">
                    <div className="ml-[40%]">
                        <h1>OPTI<br />CARE</h1>
                    </div>
                </div>

                <a href="https://opticare.netlify.app/">
                    <p className="text-[2vw] ml-[50%] underline">
                        OPTICARE, CRM System For Mobile Eye Care Business
                    </p>
                </a>

                <div
                    className="absolute w-[35vw] right-[50%] top-[100px] z-[100] flex flex-col justify-center items-center rounded-md h-[80%]"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundAttachment: 'fixed',
                        backgroundPosition: `center ${offsetY * 0.5}px`, // Adjust parallax effect by changing multiplier
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="absolute top-[50%] right-[-30%] -translate-x-[50%] -translate-y-[50%] w-[80%]">
                        <img src={game} className="rounded-lg" />
                    </div>
                </div>
            </div>
        </>
    );
}
