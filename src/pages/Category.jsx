import { useParams } from "react-router-dom";
import LeftSideBar from "../components/LeftSideBar";
import VideoCard from "../components/VCard";
import { videos } from "../db/videos";


export default function Category() {
  const { catName } = useParams();

  const videosOfCategories = videos.filter((item) => item.category === catName);

  return (
    <>
      <div className="flex ">
        <LeftSideBar />
        <div>
          <h1 className="text-3xl font-bold">{catName}</h1>
          <div className='flex flex-wrap gap-1 p-2 items-center justify-left'>

            {videosOfCategories?.map((item) => (
              <VideoCard item={item} key={item._id} />
            ))}
          </div>

        </div>

      </div>

    </>
  );
}
