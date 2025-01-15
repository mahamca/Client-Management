import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import useTheme from '@/hooks/useTheme'; 

const Home = () => {
    const { isDark, toggleTheme } = useTheme(); 
    const navigate=useNavigate()
    
  return (
    <div>

<div className="bg-white dark:bg-gray-800 py-6 mt-1">
<Button className="btn btn-light float-end"style={{marginRight:"20px",marginTop:"10px"}}onClick={()=>navigate('/login/')}>Login</Button>
<Button className="btn btn-light float-end"style={{marginRight:"20px" ,marginTop:"10px"}}onClick={()=>navigate('/register/')}>Register</Button>
   
        <div className="max-w-4xl mx-auto p-2">
          

          
          
        </div>
       
      </div>
   
 <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="text-center">
          {/* <h1 className="text-4xl font-semibold mb-6">
            Welcome to Full Page Dark Mode Example
          </h1> */}
         
          {/* Button to toggle theme */}
          <div style={{ display: 'flex', gap: '200px' }}>
          <img src="/src/images/download.jpg" style={{height:"250px",width:"250px",marginRight:"10px",marginTop:"10px"}}  alt="" />
          <img src="/src/images/images (1).jpg" style={{height:"250px",width:"250px",marginRight:"10px",marginTop:"10px"}}  alt="" />
          
          <img src="/src/images/images.jpg" style={{height:"250px",width:"250px",marginRight:"10px",marginTop:"10px"}}  alt="" />
          </div>
          <p className="mt-4 text-lg" style={{textAlign:"justify"}}>Chartered accountants were the first accountants to form a professional accounting body, initially established in Scotland in 1854. The Edinburgh Society of Accountants (1854), the Glasgow Institute of Accountants and Actuaries (1854) and the Aberdeen Society of Accountants (1867) were each granted a royal charter almost from their inception.[1] The title is an internationally recognised professional designation; the certified public accountant designation is generally equivalent to it. Women were able to become chartered accountants only following the Sex Disqualification (Removal) Act 1919 after which, in 1920, Mary Harris Smith was recognised by the Institute of Chartered Accountants in England and Wales and became the first woman chartered accountant in the world.</p>
        </div>
      </div>

      {/* Additional content */}
      <div className="bg-white dark:bg-gray-800 py-8 mt-10">
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-2xl font-semibold"style={{textAlign:"center"}} >CONTACT US</h2>
          <p className="mt-4 text-lg">
            </p>
        </div>
      </div>
    </div>



    </div>
  )
}

export default Home