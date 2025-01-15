import React, { useState } from 'react'
import supabase from '../Helper/SupabaseClient'
import { useNavigate,Link } from 'react-router-dom'
import { Button} from './ui/button'
import { Input } from './ui/input'
import { Card } from './ui/card'

const Register = () => {

    const navigate=useNavigate()
   
const [email,setEmail]=useState('')

const [password,setPwd]=useState('')
const [confirmPassword,setConfirmPwd]=useState('')
const [message,setMessage]=useState(null)
const [loading, setLoading] = useState(false);

const submit=async (event)=>{
event.preventDefault()
setMessage("")
if (password !== confirmPassword) {
    setMessage('Passwords do not match.');
    return;
  }

  if (!email || !password) {
    setMessage('Please fill in all fields.');
    return;
  }

  setLoading(true);
const {data,error}= await supabase.auth.signUp({
email:email,
password:password,
});

if(error){
    setMessage(error.message)
    setEmail("")
    setPwd("")
    setConfirmPwd("")
    return;
}


if(data){
    setMessage("User account created")
    navigate('/login')
    return;
}



setLoading(false);
}

  return (
    <div>
                <div className="flex justify-end p-2 mr-2">
            <Button onClick={()=>navigate('/login')} style={{marginLeft:"20px"}} className="bg-blue-500 text-white dark:bg-blue-700 px-6 py-3 rounded-lg transition-all">Back</Button>
                       </div> 
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        
    <Card className="w-full sm:w-96 p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sign Up</h2>




{message && <div className="mb-4 text-red-600 dark:text-red-400 text-sm">{message}</div>}
<form className="space-y-4">

 
    <div>
    <Input onChange={(event)=>setEmail(event.target.value)} value={email} type='email' placeholder='Enter your email' className="w-full p-3 border border-gray-300 rounded-md" required/>
   
    </div>
    <div>
     <Input onChange={(event)=>setPwd(event.target.value)} type='password' value={password} placeholder='Enter your password'  className="w-full p-3 border border-gray-300 rounded-md" required/>
     </div>
     <div>
     <Input onChange={(event)=>setConfirmPwd(event.target.value)} type='password' value={confirmPassword} placeholder='Confirm your password'  className="w-full p-3 border border-gray-300 rounded-md" required/>
     </div>
     <div>
    <Button style={{marginRight:"20px"}} onClick={(event)=>submit(event)} disabled={loading}  className="w-full py-3 bg-blue-600 text-white rounded-md">{loading ? 'Creating Account...' : 'Sign Up'}</Button>
    </div>

</form>

<div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
<Link to='/login' className="text-blue-600 dark:text-blue-400 hover:underline">Login</Link> </p></div>
</Card>

</div>    </div>
  )
}

export default Register