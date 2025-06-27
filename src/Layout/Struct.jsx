import { FaUser } from "react-icons/fa";
import { Task } from "../components/Task";
import { Prodmo } from "../components/Prodmo";
export const Struct=() =>{
    return(
        <>
        <nav className="flex justify-between bg-blue-950 text-white text-2xl p-4">
          <p>Prodmode</p>  
            <FaUser />
        </nav>
        <div className="bg-black ">
            <div className="grid grid-cols-3 p-4 ">
                <div><Task/></div>
                <div><Prodmo/></div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </div>
        </>
    )
}