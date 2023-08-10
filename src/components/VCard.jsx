import { NavLink } from "react-router-dom";
import { useData } from "../context/DataContext";
export default function VideoCard({ item }) {
  const {personalData, dispatch} = useData()
  return (
    <div
      key={item._id}
      className="w-[320px] p-2 flex flex-col justify-between text-left "
    >
      <NavLink to={`/video/${item._id}`}>
        <div  className="flex flex-col justify-between">
          <img src={item?.thumbnail} alt="" className="w-full" />
          <p className="flex self-start gap-1 p-2 pl-1 ">
            <img
              src="https://picsum.photos/50"
              className="border-2 rounded-3xl self-start"
              alt="profile of creator"
            />
            <p className="">
              <p className="font-bold">{item?.title}</p>

              <p className="pl-1 font-light  text-sm">
                {item?.views} views | {item?.creator}
              </p>
            </p>
          </p>
        </div>
        </NavLink>
        <div onClick={(e)=>{e.stopPropagation()}} className="pl-1 flex gap-2 justify-around">
          <button onClick={(e)=>{
            e.stopPropagation()
            dispatch({type:"ADD_TO_PLAYLIST" , payload:{video:item, playlist:"xyz"}})}}>Add to playlist</button>
          <button onClick={(e)=>{
            e.stopPropagation()
            dispatch({type:"ADD_TO_WATCHLATER" , payload:item})}}>Add to WatchLater</button>
        </div>
      

    </div>
  );
}
