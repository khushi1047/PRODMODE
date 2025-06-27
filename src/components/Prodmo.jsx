import { IoTimer } from "react-icons/io5";

export const Prodmo = () => {
  return (
    <>
      <div className="bg-blue-950 opacity-95 text-white rounded-2xl p-4 w-[400px] ">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <IoTimer size={24} />
          <p>Pomodoro Timer</p>
        </div>

        <div className="flex flex-col justify-center items-center p-6 gap-6">
         
          <div className="border-[6px] border-amber-500 rounded-full h-40 w-40 flex items-center justify-center text-2xl font-bold">
            25:00
          </div>

       
          <div className="flex gap-4">
            <button className="hover:cursor-pointer bg-black text-white hover:bg-white hover:text-black rounded-2xl px-4 py-2">
              Start
            </button>
            <button className="hover:cursor-pointer bg-black text-white hover:bg-white hover:text-black rounded-2xl px-4 py-2">
              Pause
            </button>
            <button className="hover:cursor-pointer bg-black text-white hover:bg-white hover:text-black rounded-2xl px-4 py-2">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
