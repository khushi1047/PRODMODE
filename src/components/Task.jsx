    import { useEffect, useState } from "react"
    import { MdDeleteForever } from "react-icons/md";


    export const Task=()=>{
    const [inputValue, setInputValue] = useState(""); 
    const [taskList, setTaskList] = useState([]);  
    const [intialised, setintialised] = useState(true)

      const [error, setError] = useState("");
        const handleAddbtn=(e)=>{
            e.preventDefault();
             if (inputValue.trim() === "") {
      setError("⚠️ Please fill the field.");
      return;
    }
            setTaskList((prev)=>[
                ...prev,inputValue
            ]);
            setInputValue("");
              setError(""); 
        }
// key : string value :string (here taskList is array so we need to convert it into string using JSON.stringify)
   
 
      const handledelete = (indexToDelete) => {
    const updatedTask = taskList.filter((_, index) => index !== indexToDelete);
    setTaskList(updatedTask);
  };
  useEffect(() => {
    if (!intialised) {
      localStorage.setItem("tasktodo", JSON.stringify(taskList));
    }
  }, [taskList]);
    
    useEffect(() => {
        const getitems = localStorage.getItem("tasktodo");
        if (getitems) {
            setTaskList(JSON.parse(getitems));
        }
         setintialised(false);
        }, []);

 
        return(
            <>
        
                <p>Task To-do</p>
                <form   onSubmit={handleAddbtn} className="flex flex-row justify-between">
            
                    <input type="text" placeholder="enter task" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} >
                    </input>
                    <button className="bg-black p-2 rounded-2xl hover:cursor-pointer hover:bg-amber-50 hover:text-black" >Add task</button>
                    </form>
                     {error && <p className="text-red-500 mt-2">{error}</p>}

                    <ul className="text-white">
                {
                    taskList.map((currele,index)=>{
                        return(
                            <li className="flex flex-row justify-between" key={index}>
                                <p className="gap-6">{currele}</p>
                                <button className="hover:cursor-pointer " onClick={()=>handledelete(index)}><MdDeleteForever className="hover:text-green-600"/></button>
                                
                                </li>
                            
                        )
                    })
                }
                </ul>
            
        
            </>
        )
    }