import {NavLink} from 'react-router-dom'


export default function NavBar(){

  return (
    <>
    <div className="navbar w-1/4 flex flex-col items-start p-4 gap-8 justify-between">

      <NavLink to='/'>
       <div>Home</div>
      </NavLink>
      <NavLink to='/explore'>
       <div>Explore</div>
      </NavLink >
      <NavLink to='/playlists'>
       <div>Playlists</div>
      </NavLink>
      <NavLink to='/watchlist'>
       <div>Watch Later</div>
      </NavLink>
      
      </div>    
    
    </>
  )
}