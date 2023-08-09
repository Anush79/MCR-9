
import LeftSideBar from '../components/LeftSideBar'
import { videos } from '../db/videos'
import VideoCard from '../components/VCard'
import { useState } from 'react'
export default function Explore() {

  const [videosToDisplay, setVideosToDisplay] = useState(videos);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const filteredData = videos.filter(({ title }) => title.toLowerCase().includes(value.trim().toLowerCase()))
    setVideosToDisplay(filteredData)
  }
  return (
    <>
      <div className='flex gap-2 w-screen '>
        <LeftSideBar />


        <div className='flex flex-col grow-1 text-left border-4 '>
          <h1 className='text-2xl font-bold text-left'>Explore Videos</h1>
          <input type="text" name="search" placeholder="search videos by title" onChange={onChangeHandler}
            id="" className='border-4 w-1/2 p-2 m-1 items-center rounded-md' />
          <div className="container flex flex-row gap-2 flex-wrap ">

            {
              videosToDisplay.map(item => <VideoCard item={item} key={item._id} />)
            }
          </div>

        </div>
      </div>


    </>
  )
}