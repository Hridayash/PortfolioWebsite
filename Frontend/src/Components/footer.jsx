

export default function Footer(){

    return(
        <div className="flex items-center justify-between border-black-400 px-20 py-10 bg-black text-white ">
            <p className='w-[50%]'>Designed by Olalekan Meshioye Inspired from <u>aquadev.sit</u></p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 justify-self-end ">
              <a href="https://github.com/Hridayash">GitHub</a>
              <a href="https://www.linkedin.com/in/hridesh-bhusal/">LinkedIn</a>
              <a href="https://www.instagram.com/hrideshp2/">Instagram</a>
              <a href="https://twitter.com/hrides1">Twitter</a>
            </div>
        </div>
    );
}