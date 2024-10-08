import Image from "next/image";
import Link from "next/link";
import React from "react";
import AtharvaMaliImg from "../public/assets/projects/Atharva-Mali.png";
import AMMediaImg from "../public/assets/projects/AM-Media.png";
import ShahiKhadyaImg from "../public/assets/projects/Shahi-Khadya-Restaurant.png";
import MobiStoreImg from "../public/assets/projects/Mobi-Store.png";
import PersonalPortfolioImg from "../public/assets/projects/Nextjs-Portfolio.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[90%] mx-auto px-2 py-16 pt-24">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Personal Portfolio"
            projectTechnology="React JS"
            projectImg={PersonalPortfolioImg}
            projectUrl="/personalPortfolio"
          />
          <ProjectItem
            title="AM Media (Youtube Clone)"
            projectTechnology="React JS"
            projectImg={AMMediaImg}
            projectUrl="/amMedia"
          />
          <ProjectItem
            title="Modern UI/UX Portfolio Website"
            projectTechnology="React JS"
            projectImg={AtharvaMaliImg}
            projectUrl="/reactPortfolio"
          />
          <ProjectItem
            title="Shahi Khadya Restaurant"
            projectTechnology="PHP"
            projectImg={ShahiKhadyaImg}
            projectUrl="/shahiKhadyaRestaurant"
          />
          <ProjectItem
            title="Mobi Store"
            projectTechnology="HTML/CSS"
            projectImg={MobiStoreImg}
            projectUrl="/mobiStore"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
