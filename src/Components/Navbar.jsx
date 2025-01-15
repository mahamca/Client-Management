import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useTheme from '@/hooks/useTheme'; 
import { Button } from './ui/button'
import supabase from '../Helper/SupabaseClient'

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme(); 
    const navigate=useNavigate()


    
      

  return (

        <nav className="navbar navbar-expand-lg bg-primary">
 
   <h1 style={{color:"blue", fontSize:"20px",padding:"10px"}}> CLIENT MANAGEMENT</h1>
   <div className="flex justify-end p-2 mr-2">
    <Button
                variant="primary"
                className="bg-blue-500 text-white dark:bg-blue-700 px-6 py-3 rounded-lg transition-all"
                onClick={toggleTheme}
              >
                {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </Button>
              
              </div>

              
    

   
  
  
</nav>
  )
}

export default Navbar