import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import AddPlaylist from "../components/AddPlalist";
import LeftSideBar from "../components/LeftSideBar";

import { useData } from "../context/DataContext";
import { NavLink } from "react-router-dom";
export default function Playlist() {
  const { personalData, dispatch } = useData();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <>
      <div className="flex">
        <LeftSideBar />
        <div className="main flex flex-col flex-wrap">
          <h1 className="text-2xl font-bold text-left mb-4">Playlist Page</h1>
          <div className="flex gap-2 flex-wrap p-4 ">
            {personalData?.playlists?.map((item) => (
              <div className="flex flex-col">
                <NavLink to={`/playlist/${item.name}`}>
                <img
                  src="https://www.picsum.photos/150"
                  alt="playlist xyz"
                 
                  className="rounded-lg"
                />
                </NavLink>
                <div className="flex flex-col">
                <span className="">{item.name}</span>
                <button onClick={()=>{dispatch({type:"DELETE_PLAYLIST", payload:item.name})}}>Delete {item.name}</button>
             
                </div>
                 </div>
            ))}
          </div>
          <span
            className="text-4xl"
            onClick={handleOpen}
          
          >
            <PlaylistAddCircleIcon fontSize="" />
          </span>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <AddPlaylist closeFunction = {handleClose}/>
          </Modal>
 
          <div>
            {
              
            }
          </div>



        </div>
      </div>
    </>
  );
}
