import { NavLink } from 'react-router-dom'
import LeftSideBar from '../components/LeftSideBar'
import { categories } from '../db/categories'

export default function Home() {
  return (
    <div className='flex  '>
      <LeftSideBar></LeftSideBar>
      <div className="main text-left p-2">
        <h1 className='font-bold text-2xl'>Categories</h1>
        <div className='flex flex-wrap gap-1 p-2 items-center'>
          {
            categories.map(item => <div className='w-1/7 flex p-2 bg-dark-300 rounded-lg hover:bg-slate-400 flex-col items-start '>
              <NavLink to={`/categories/${item.category}`}>
                <img src={item.thumbnail} alt="thumbnail for video" className='w-full rounded-lg ' />
                <h2>{item.category}</h2>
              </NavLink>


            </div>)
          }
        </div>

      </div>




    </div>
  )
}