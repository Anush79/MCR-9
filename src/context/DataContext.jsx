import { createContext, useContext, useEffect, useReducer } from "react";
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
    case "DELETE_PLAYLIST":
      toast.info("Playlist Deleted");
      return {
        ...state,
        playlists: state.playlists.filter((item) => item.name !== payload),
      };

    case "ADD_TO_PLAYLIST":
      const foundPlaylist = state?.playlists?.find((item) => {
        return item.name === payload.playlist;
      });

      if (foundPlaylist) {
        if (
          foundPlaylist.videos.find((item) => item._id === payload.video._id)
        ) {
          toast.warn("This video is already present in the Playlist");
          return state;
        } else {
          const updatedPlaylist = [payload.video, ...foundPlaylist.videos];
          const updatedState = {
            ...state,
            playlists: state.playlists.map((item) =>
              item.name === payload.playlist
                ? { ...item, videos: updatedPlaylist }
                : item
            ),
          };
          toast.success("Added to playlist");
          return updatedState;
        }
      } else {
        toast.error("playlist not found");
        return state;
      }
    case "ADD_TO_WATCHLATER":
      if (state.watchLater.find((item) => item._id === payload._id))
       {toast.info("Video removed from Watch Later")
      return {
          ...state,
          watchLater: state.watchLater.filter(
            (item) => item._id !== payload._id
          ),
        };}
      else {
        toast.success("Added to WatchLater");
        return { ...state, watchLater: [payload, ...state.watchLater] };
      }

    default:
      break;
  }
};

const localData = JSON.parse(localStorage.getItem("personalData"));
export function DataProvider({ children }) {
  const [personalData, dispatch] = useReducer(
    reducerFunction,
    localData ?? initialState
  );

  useEffect(() => {
    localStorage.setItem("personalData", JSON.stringify(personalData));
  }, [personalData]);
  return (
    <DataContext.Provider value={{ personalData, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
export function useData() {
  return useContext(DataContext);
}
