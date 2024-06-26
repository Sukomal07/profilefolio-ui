import Link from "next/link";
import { BasicDetails } from "./Resume/BasicDetails";

export const Resume = () => {
  return (
    <div className=" bg-white shadow-md mx-16 h-[297mm] w-[220mm]  my-2 py-2 px-4">
        {/* BasicDetails */}
        <BasicDetails/>
    </div>
  );
};
