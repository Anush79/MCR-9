import {NavLink} from 'react-router-dom'
import LeftSideBar from '../components/LeftSideBar'
import { categories } from '../db/categories'

export default function Home(){
  return (
    <div className='flex  '>
    <LeftSideBar></LeftSideBar>
    <div className="main">
       <h1 className='font-bold text-2xl'>Categories</h1>
       <div className='flex flex-wrap gap-1 p-2'>
         {
        categories.map(item=><div className='flex p-2 bg-slate-100 rounded-lg hover:bg-slate-400 flex-col items-start '>
          <NavLink to={`/categories/${item._id}`}>

          </NavLink>
          <img src={item.thumbnail} alt="thumbnail for video" className='w-full rounded-lg ' />
          <h2>{item.category}</h2>

        </div>)
       }
       </div>
      
    </div>
   

    
    
    </div>
  )
}