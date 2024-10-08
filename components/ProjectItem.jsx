import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, projectTechnology, projectImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={projectImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute px-10 flex-col justify-center align-center">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{projectTechnology}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer mb-3">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
