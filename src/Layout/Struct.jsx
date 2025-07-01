import { FaUser } from "react-icons/fa";
import { Task } from "../components/Task";
import { Prodmo } from "../components/Prodmo";
import { Quote } from "../components/Quote";
import { AISuggestions } from "../components/AISuggestions";

export const Struct = () => {
  return (
    <>
      <nav className="flex justify-between bg-[#1e293b] text-white text-2xl p-4">
        <p>🧠 Prodmode Dashboard</p>
        <FaUser />
      </nav>

      <div className="bg-black min-h-screen text-white p-6 grid grid-cols-1 gap-4 md:grid-cols-3">

     
        <div className="bg-[#1e293b] rounded-xl p-4">
          <Task />
        </div>

       
        <div className="bg-[#1e293b] rounded-xl p-4">
          <Prodmo />
        </div>

       
        <div className="bg-[#1e293b] rounded-xl p-4 text-center flex flex-col justify-center md:row-span-2">
          <Quote />
        </div>

    
        <div className="bg-[#1e293b] rounded-xl p-3 md:col-span-2">
          <AISuggestions />
        </div>
        
      </div>
    </>
  );
};
