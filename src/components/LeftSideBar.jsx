import {NavLink} from 'react-router-dom'


export default function NavBar(){

  return (
    <>
    <div className="navbar  w-[250px] h-[90vh] flex flex-col items-start p-2 gap-2 border-r-2">

      <NavLink to='/'>
       <div className='p-4 rounded-lg'>Home</div>
      </NavLink>
      <NavLink to='/explore'>
       <div className='p-4 rounded-lg'>Explore</div>
      </NavLink >
      <NavLink to='/playlists'>
       <div className='p-4 rounded-lg'>Playlists</div>
      </NavLink>
      <NavLink to='/watchlist'>
       <div className='p-4 rounded-lg'>Watch Later</div>
      </NavLink>
      
      </div>    
    
    </>
  )
}