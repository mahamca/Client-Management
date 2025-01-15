import React, { useEffect, useState } from 'react'
import supabase from '../Helper/SupabaseClient'
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const ViewallClients = () => {
const [clients, setClients] = useState([]);
const navigate=useNavigate()
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
  return (
    <div>
        <div className="mt-3">
                              <Button onClick={()=>navigate('/dashboard')} style={{marginLeft:"20px"}} className="py-3 bg-blue-600 text-white rounded-md">Back</Button></div>
                
        <div className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                       
        <div className="overflow-x-auto">
                  <table className="min-w-full table-auto">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                      <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Sl.No</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Name</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Email</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Phone</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Address</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Tax Id</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Gst Number</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Start Date</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">End Date</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Annual Revenue</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Ac Number</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Ac Type</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">status</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.map((client) => (
                        <tr key={client.id} className="border-t border-gray-200 dark:border-gray-700">
                              <td className="py-3 px-6 text-gray-900 dark:text-white">{(client.id)}</td>
                          <td className="py-3 px-6 text-gray-900 dark:text-white">{client.name}</td>
                          <td className="py-3 px-6 text-gray-500 dark:text-gray-300">{client.email}</td>
                          <td className="py-3 px-6 text-gray-500 dark:text-gray-300">{client.phone}</td>
                          <td className="py-3 px-6 text-gray-900 dark:text-white">{client.address}</td>
                          <td className="py-3 px-6 text-gray-500 dark:text-gray-300">{client.taxid}</td>
                          <td className="py-3 px-6 text-gray-500 dark:text-gray-300">{client.gstno}</td>
                          <td className="py-3 px-6 text-gray-900 dark:text-white">{client.startDate}</td>
                          <td className="py-3 px-6 text-gray-500 dark:text-gray-300">{client.endDate}</td>
                          <td className="py-3 px-6 text-gray-500 dark:text-gray-300">{client.annualRevenue}</td>
                          <td className="py-3 px-6 text-gray-900 dark:text-white">{client.acNo}</td>
                          <td className="py-3 px-6 text-gray-900 dark:text-white">{client.acType}</td>
                          <td className="py-3 px-6 text-gray-500 dark:text-gray-300">{client.status}</td>
                          <td className="py-3 px-6 text-gray-500 dark:text-gray-300">{client.notes}</td>
                          <td className="py-3 px-6 text-blue-500 dark:text-blue-300 cursor-pointer">
                            
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table></div>
                </div>
    </div>
  )
}

export default ViewallClients