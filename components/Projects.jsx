import Image from "next/image";
import Link from "next/link";
import React from "react";
import AtharvaMaliImg from "../public/assets/projects/Atharva-Mali.png";
import AMMediaImg from "../public/assets/projects/AM-Media.png";
import ShahiKhadyaImg from "../public/assets/projects/Shahi-Khadya-Restaurant.png";
import MobiStoreImg from "../public/assets/projects/Mobi-Store.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="AM Media (Youtube Clone)"
            projectTechnology="React JS"
            projectImg={AMMediaImg}
            projectUrl="/modern-portfolio-website"
          />
          <ProjectItem
            title="Modern UI/UX Portfolio Website"
            projectTechnology="React JS"
            projectImg={AtharvaMaliImg}
            projectUrl="/modern-portfolio-website"
          />
          <ProjectItem
            title="Shahi Khadya Restaurant"
            projectTechnology="PHP"
            projectImg={ShahiKhadyaImg}
            projectUrl="/modern-portfolio-website"
          />
          <ProjectItem
            title="Mobi Store"
            projectTechnology="HTML/CSS"
            projectImg={MobiStoreImg}
            projectUrl="/modern-portfolio-website"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
