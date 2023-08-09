import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";
import { videos } from "../db/videos";
const DataContext = createContext();

const initialState = {
  watchLater: [],
  playlists: [
    {
      name: "xyz",
      videos: [
        {
          _id: 24,
          title: "Quilling Art Techniques - Creating Intricate Designs",
          views: 1756,
          chips: ["quilling", "paper art", "techniques", "intricate designs"],
          thumbnail: "https://picsum.photos/300/179",
          src: "https://www.youtube.com/embed/GBIIQ0kP15E",
          category: "Quilling",
          creator: "ArtfulQuills",
        },
        {
          _id: 25,
          title: "Origami Crane Mobile - DIY Home Decor",
          views: 2251,
          chips: ["origami", "crane", "mobile", "paper", "home decor"],
          thumbnail: "https://picsum.photos/301/174",
          src: "https://www.youtube.com/embed/GBIIQ0kP15E",
          category: "Origami",
          creator: "HomeCraftHacks",
        },
      ],
    },
  ],
};
const reducerFunction = (state, action) => {
  const { type, payload } = action;
  console.log(payload.playlist)
  switch (type) {
    case "ADD_PLAYLIST":
      if (state.playlists.find((item) => item.name === payload.playlist)) {
        toast.warn("playlist already exists");
        return state;
      } else {
        toast.success(payload + " playlist created ");
        return {
          ...state,
          playlists: [...state.playlists, { name: payload, videos: [] }],
        };
      }
    case "ADD_TO_PLAYLIST":
      const foundPlaylist = state.playlists.find(
        (item) =>{
         
          return item.name === payload.playlist}
      );
      console.log({foundPlaylist})
      if (foundPlaylist) {
        if (
          foundPlaylist.videos.find((item) => item._id === payload.video._id)
        ) {
          toast.warn("This video is already present in the Playlist");
          return;
        } else {
          return { ...state, playlists: [payload.video, ...state.playlists] };
        }
      }else return state;
    case "ADD_TO_WATCHLATER":
      break;
    default:
      break;
  }
};

export function DataProvider({ children }) {
  const [personalData, dispatch] = useReducer(reducerFunction, initialState);

  console.log({ personalData });
  return (
    <DataContext.Provider value={{ personalData, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
export function useData() {
  return useContext(DataContext);
}
