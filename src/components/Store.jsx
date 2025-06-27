import {createStore} from "redux"


const Add = "task/add";
const Delete = "task/delete"

const initialState = {
    task:[],
}
const TaskReducer = (state = initialState, action)=>{
    switch(action.type){
        case Add:
            return{
                ...state,
                task: [...state.task,action.payload],
            }
        case Delete:
            const updatedTask = state.task.filter((currTask,index)=>{
                return index!==action.payload
            });
            return{
                task: [...state.task,updatedTask],
            }
        default :
            return state;
    }

}


export const store = createStore(TaskReducer);

export function addtask(data) {
  return { 
    type: Add, payload: data 
};
}
export function deletetask(id){
    return{
        type:Delete , payload:id
    };
}


console.log("initial state: " ,store.getState());
store.dispatch(addtask("khushi"))
store.dispatch({type:Add , payload:"Harsh "})
store.dispatch(deletetask(1))
console.log("updated add data: ", store.getState())
