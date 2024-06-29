'use client'
import { useRef } from "react";
import { BasicDetails } from "./Resume/BasicDetails";
import { Certifications } from "./Resume/Certifications";
import { Experience } from "./Resume/Experience";
import { Projects } from "./Resume/Projects";
import { Skills } from "./Resume/Skills";

export const Resume = () => {
  const componentRef = useRef<any>(null)
  return (
    <div className=" bg-white shadow-md mx-16 h-[297mm] w-[220mm]  my-2 ">
      <div ref={componentRef} className="py-2 px-6">
        {/* BasicDetails */}
        <BasicDetails />
        {/* Projects */}
        {/* <Projects /> */}
        {/* Experience */}
        {/* <Experience /> */}
        {/* Skills */}
        {/* <Skills /> */}
        {/* Certifications */}
        {/* <Certifications /> */}
      </div>
    </div>
  );
};
