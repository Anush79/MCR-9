
import { useState } from "react";
import { useData } from "../context/DataContext";

export default function AddPlaylist ({closeFunction}){
  const [inputData, setInputData] = useState()
  const {dispatch} = useData()
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };


  return <div style={style} className="flex">
    <form onSubmit={(e)=>{e.preventDefault();closeFunction()
    }}  className=  "w-[200px] h-[200px] flex flex-col gap-2  ">
      <input type="text" name="nameOfPlaylist" placeholder="Name of Playlist"id="" onChange={(e)=>{setInputData(e.target.value)}}/>
      <button  onClick={() => {
              dispatch({ type: "ADD_PLAYLIST", payload: inputData });
            }}>Add New Playlist</button>
    </form>
  </div>
}