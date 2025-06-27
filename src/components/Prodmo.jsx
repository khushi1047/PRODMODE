import { useEffect, useState, useRef } from "react";
import { IoTimer } from "react-icons/io5";

export const Prodmo = () => {
  const [count, setCount] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setCount((prev) => prev + 1); 
      }, 1000);
    }
  };

  const pause = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setCount(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const min = Math.floor(count / 60);
    const sec = count % 60;
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current); 
  }, []);

  return (
    <div className="bg-blue-950 opacity-95 text-white rounded-2xl p-4 w-[400px]">
      <div className="flex items-center gap-2 text-xl font-semibold">
        <IoTimer size={24} />
        <p>Pomodoro Timer</p>
      </div>

      <div className="flex flex-col justify-center items-center p-6 gap-6">
        <div className="border-[6px] border-amber-500 rounded-full h-40 w-40 flex items-center justify-center text-2xl font-bold">
          {formatTime()}
        </div>

        <div className="flex gap-4">
          <button
            className="bg-black px-4 py-2 rounded-2xl hover:bg-white hover:text-black"
            onClick={start}
          >
            Start
          </button>
          <button
            className="bg-black px-4 py-2 rounded-2xl hover:bg-white hover:text-black"
            onClick={pause}
          >
            Pause
          </button>
          <button
            className="bg-black px-4 py-2 rounded-2xl hover:bg-white hover:text-black"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
