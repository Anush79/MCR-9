import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import AddPlaylist from "../components/AddPlalist";
import LeftSideBar from "../components/LeftSideBar";

import { useData } from "../context/DataContext";
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
                <img
                  src="https://www.picsum.photos/150"
                  alt="playlist xyz"
                 
                  className="rounded-lg"
                />
                {item.name}
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
