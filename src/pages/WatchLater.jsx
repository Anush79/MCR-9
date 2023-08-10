
import LeftSideBar from '../components/LeftSideBar'
import VideoCard from '../components/VCard'
import { useData } from '../context/DataContext'
export default function Watch() {
  const { personalData } = useData()


  return (
    <div className='flex'>


      <LeftSideBar />
      <div>
        
      <h1 className='font-bold text-3xl border-b-2 border-stone-950'>Watch Later Page</h1>
      <div className='flex flex-wrap'>
        {personalData.watchLater?.length>0 &&
          personalData.watchLater.map(item => <VideoCard item={item} />) ||
          <p className='flex items-center h-full'>
            WatchLater is empty
          </p>
        }
      </div>
      </div>
    </div>
  )
}
