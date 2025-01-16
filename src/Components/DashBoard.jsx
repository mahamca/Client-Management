import React, { useEffect, useState } from 'react'
import supabase from '../Helper/SupabaseClient'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Card } from './ui/card'
import Avatar from './Avatar'
import { Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger, } from './ui/tooltip'


const DashBoard = () => {

  const navigate=useNavigate()
  const [clients, setClients] = useState([]);
  
  const [isUpdating, setIsUpdating] = useState(false);
  const [clientId, setClientId] = useState(null);
//   const router = useRouter();

  useEffect(() => {
    const fetchClients = async () => {
      const { data, error } = await supabase.from('clients').select();
      if (error) {
        console.error(error.message);
      } else {
        setClients(data);
      }
    };
    fetchClients();
  }, []);

  const handleUpdate = (id) => {
        setClientId(id);
  };



  const signOut=async()=>{
    const {error}=await supabase.auth.signOut();
    if(error) throw error;
    navigate('/login')
  }

  const deleteClient = async (id) => {
    const { error } = await supabase.from('clients').delete().eq('id', id);
    if (error) {
      console.error(error.message);
    } else {
      setClients(clients.filter(client => client.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
  

  <div className="flex justify-end p-2 mr-2">
  <Button onClick={signOut} style={{marginLeft:"20px"}} className="bg-blue-500 text-white dark:bg-blue-700 px-6 py-3 rounded-lg transition-all">Sign Out</Button>
             </div>

 <div className="max-w-7xl mx-auto">
         
         
         {/* Add New Client Button */}
         <div className="mb-4">
           <Button variant="primary" onClick={()=>navigate('/addclient')} className="bg-blue-600 text-white p-4 rounded-md" >
             Add New Client
           </Button>
           <Button variant="primary" style={{marginLeft:"20px"}} onClick={()=>navigate('/allclients')} className="bg-blue-600 text-white p-4 rounded-md" >
             View All Clients in Table format
           </Button>
         </div>
        
 
         {/* Client Overview Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           {/* Example Client Card */}
           {clients.map((client) => (
             <Card key={client.id} className="bg-white shadow-lg dark:bg-gray-800 p-6 rounded-lg">
               <div className="flex items-center space-x-4">
                 <Avatar src="https://via.placeholder.com/150" alt={client.name} />
                 <div>
                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{client.name}</h3>
                   <p className="text-gray-500 dark:text-gray-300">{client.email}</p>
                   <p className="text-gray-500 dark:text-gray-300">{client.phone}</p>
                   {/* <Button style={{marginLeft:"2px"}} onClick={() => navigate(`/update/${client.id}`)}>Update</Button>
        
                   <Button style={{marginLeft:"10px"}} onClick={() => deleteClient(client.id)}>Delete</Button>  */}
                  <div style={{ display: 'flex', gap: '10px' }}>
                  
                  
    <TooltipProvider>
    <Tooltip>
    <TooltipTrigger>
                 <img src="/src/images/analysis.png" style={{height:"20px",width:"20px",marginRight:"10px",marginTop:"10px"}} onClick={() => navigate(`/clientview/${client.id}`)}  alt="" />
    </TooltipTrigger>
    <TooltipContent>
      <p>View</p>
    </TooltipContent>
  </Tooltip>
 </TooltipProvider>

   <TooltipProvider>
   <Tooltip>
   <TooltipTrigger>
           <img src="/src/images/write.png" style={{height:"20px",width:"20px",marginRight:"10px",marginTop:"10px"}} onClick={() => navigate(`/update/${client.id}`)}  alt="" />
</TooltipTrigger>
 <TooltipContent>
      <p>Update</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider> 

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
        <img src="/src/images/trash.png" style={{height:"20px",width:"20px",marginRight:"10px",marginTop:"10px"}} onClick={() => deleteClient(client.id)} alt="" />
    </TooltipTrigger>
    <TooltipContent>
      <p>Delete</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider> 
        </div>
                 </div>
               </div>
             </Card>
           ))}
         </div>
</div>








    </div>
  )
}

export default DashBoard