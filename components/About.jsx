import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center">
      <div className="max-w-[90%] m-auto md:grid grid-cols-3 gap-8 pt-24">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your normal developer.</p>
          <p className="py-2 text-gray-600">I love to design and build.🎉</p>
          <p className="py-2 text-gray-600">
            You could call me a Dedicated and detail-oriented Web-dev learner.
            An avid painter, who likes to watch movies and Binge OTT platforms
            whilst do some leetcoding once in a while. I have command over{" "}
            <span className="font-semibold">
              C++, Vanilla-JS, TailwindCss, ReactJs and trying NextJs,
              Blockchain development
            </span>{" "}
            simultaneosly. I have a special interest in achieving the millennial
            market.{" "}
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how our code is rendered before our eyes,{" "}
            <span className="font-semibold">Front-end development</span> really
            fancies me. Currently I spend time with{" "}
            <span className="font-semibold">React, Firebase</span> and learning
            new technologies along the way..😁
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
