import React, { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import supabase from '../Helper/SupabaseClient'
import { Button} from './ui/button'
import { Input } from './ui/input'
import { Card } from './ui/card'

const Login = () => {

    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPwd]=useState('')
    const [message,setMessage]=useState(null)
    
    
    const submit=async (event)=>{
    event.preventDefault()
    setMessage("")
    
    const {data,error}= await supabase.auth.signInWithPassword({
    
    email:email,
    password:password,
    });
    
    if(error){
        setMessage(error.message)
        setEmail("")
        setPwd("")
        return;
    }
    
    
    if(data){
        setMessage("User account created")
        navigate('/dashboard')
        return;
    }
    
    
    }
    



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
<Card className="w-full sm:w-96 p-8 shadow-lg rounded-lg">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Login</h2>

{message &&  <div className="mb-4 text-red-600 dark:text-red-400 text-sm">{message}</div>}
<form className="space-y-4">
    <div>
    <Input onChange={(event)=>setEmail(event.target.value)} value={email} type='email' className="w-full p-3 border border-gray-300 rounded-md" placeholder='email' required/>
    </div>
    <div>

   
    <Input onChange={(event)=>setPwd(event.target.value)} type='password' value={password} placeholder='password' required className="w-full p-3 border border-gray-300 rounded-md"/>
    </div>
    <div className="flex justify-between items-center">
            <label className="text-sm text-gray-600 dark:text-gray-400">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            {/* <a href="/forgot-password" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Forgot password?
            </a> */}
          </div>
          <div>
    <Button className="w-full py-3 bg-blue-600 text-white rounded-md" variant="primary" style={{marginRight:"20px"}} onClick={(event)=>submit(event)}>Login</Button>
    </div>

</form>
<div className="mt-6 text-center">
<p className="text-sm text-gray-600 dark:text-gray-400">
Don't have an account?

<Link to='/register' className="text-blue-600 dark:text-blue-400 hover:underline">Register</Link>
</p>
        </div>
</Card>
    </div>
  )
}

export default Login