import Image from "next/image";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import Link from "next/link";
import PersonalPortfolioImg from "../public/assets/projects/Nextjs-Portfolio.png";

const personalPortfolio = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={PersonalPortfolioImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Personal Portfolio</h2>
          <h3>React JS / Next JS / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest font-bold uppercase text-[#5651e5]">
            Project
          </p>
          <h2>Overview</h2>
          <p>
            I built this application in React JS and is hosted on GitHub pages.
            This app features user authentication with firebase as well as the
            firestore cloud storage database. This application is pulling movie
            data from an the IMDB movie API and displaying different categories.
            It features horizontal sliding and a featured selection. The
            useContext hook is also being implemented for app-wide state
            management.
          </p>
          <a
            href="https://github.com/atharva-mali/portfolio-nextjs"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105">
              Code
            </button>
          </a>
          <a
            href="https://atharva-mali.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 hover:scale-105">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <BsFillStarFill className="pr-1 mr-1 ml-2 text-[#5651e5]" />{" "}
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsFillStarFill className="pr-1 mr-1 ml-2 text-[#5651e5]" />{" "}
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsFillStarFill className="pr-1 mr-1 ml-2 text-[#5651e5]" />{" "}
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsFillStarFill className="pr-1 mr-1 ml-2 text-[#5651e5]" />{" "}
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsFillStarFill className="pr-1 mr-1 ml-2 text-[#5651e5]" />{" "}
                IMDB API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default personalPortfolio;
