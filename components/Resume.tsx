import { BasicDetails } from "./Resume/BasicDetails";
import { Experience } from "./Resume/Experience";
import { Projects } from "./Resume/Projects";
import { Skills } from "./Resume/Skills";

export const Resume = () => {
  return (
    <div className=" bg-white shadow-md mx-16 h-[297mm] w-[220mm]  my-2 py-2 px-4">
        {/* BasicDetails */}
        <BasicDetails/>
        {/* Projects */}
        <Projects/>
        {/* Experience */}
        <Experience/>
        {/* Skills */}
        <Skills/>
    </div>
  );
};
