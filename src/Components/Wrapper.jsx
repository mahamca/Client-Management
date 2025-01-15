import React, { useEffect, useState } from 'react'
import supabase from '../Helper/SupabaseClient'
import { useNavigate } from 'react-router-dom'

const Wrapper = ({children}) => {
    const [authenticated,setauthenticated]=useState(false)
    const [loading,setloading]=useState(true)
const navigate=useNavigate()
useEffect(()=>{

    const getSession =async()=>{
        const {
            data:{session},
        } =await supabase.auth.getSession();
        setauthenticated(!!session)
        setloading(false)

        }
    getSession()

},[])

if(loading){
    return <div>Loading...</div>
}
else{
    if(authenticated){
        return <>{children}</>
    }
    return navigate('/login')
}


  return (
    <div>Wrapper</div>
  )
}

export default Wrapper