'use client'

import { BasicDetails } from "./Resume/BasicDetails";
import { Certifications } from "./Resume/Certifications";
import Educations from "./Resume/Educations";
import { Experience } from "./Resume/Experience";
import { Projects } from "./Resume/Projects";
import { Skills } from "./Resume/Skills";
import Summary from "./Resume/Summary";

export const Resume = () => {
  return (
    <div className="bg-white shadow-md mx-16 h-[297mm] w-[220mm] my-2 ">
      <div className="h-full w-full overflow-hidden flex flex-col px-8 py-6">
        {/* BasicDetails */}
        <BasicDetails />
        {/* Summary */}
        <Summary />
        {/* Education */}
        <Educations />
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
