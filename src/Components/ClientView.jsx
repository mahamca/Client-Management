import React, { useEffect, useState } from 'react'
import supabase from '../Helper/SupabaseClient';
import { useNavigate, useParams } from 'react-router-dom';
import { Button} from './ui/button'
import { Input } from './ui/input'
import { Card } from './ui/card';
import { Label } from './ui/label';


const ClientView = () => {

    const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [address, setAddress] = useState('');
            const [taxId, setTaxId] = useState('');
            const [gstNo, setGstNo] = useState('');
            const [startdate, setStartDate] = useState('');
            const [endDate, setEndDate] = useState('');
            const [annualRevenue, setannualRevenue] = useState('');
            const [acType, setAcType] = useState('');
            const [status, setStatus] = useState('');
            const [notes, setNotes] = useState('');
            const [acNo, setAcNo] = useState('');
      const params=useParams()
    
      const {id}=params
      const navigate=useNavigate()


      useEffect(() => {
        const fetchClient = async () => {
          const { data, error } = await supabase.from('clients').select('*').eq('id', id).single();
          if (error) {
            console.error('Error fetching client:', error);
          } else {
            setName(data.name);
            setEmail(data.email);
            setPhone(data.phone);
            setAddress(data.address)
            setTaxId(data.taxId)
            setGstNo(data.gstNo)
            setStartDate(data.startdate)
            setEndDate(data.endDate)
            setannualRevenue(data.annualRevenue)
            setAcNo(data.acNo)
            setAcType(data.acType)
            setStatus(data.status)
            setNotes(data.notes)
          }
        };
    
        if (id) {
            fetchClient();
          }
      }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6">
          
          <Card className="w-full sm:w-96 p-8 shadow-lg rounded-lg bg-white dark:bg-gray-800">
         
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Client Record</h2>
          
         
          <form>
            
                <div>
                <Label htmlFor="name" className="text-gray-700 dark:text-white">Client Full Name</Label>
            
                    <Input value={name} type='text' onChange={(e) => setName(e.target.value)}  
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                        required/></div>
            
            
                <div>
                <Label htmlFor="email" className="text-gray-700 dark:text-white">Email Address</Label>
                       
                    <Input value={email} type="email" onChange={(e) => setEmail(e.target.value)} required
                          
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                        /></div>
            
                <div>
                <Label htmlFor="Phone" className="text-gray-700 dark:text-white">Phone Number</Label>
                    <Input value={phone} type='Number' onChange={(e) => setPhone(e.target.value)} required
                          
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                        /></div>
            
            
            <div>
                <Label htmlFor="address" className="text-gray-700 dark:text-white">Address</Label>
            
                    <Input value={address} type='text' onChange={(e) => setAddress(e.target.value)}  
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                        required/></div>
            
            <div>
                <Label htmlFor="TaxId" className="text-gray-700 dark:text-white">Tax Id</Label>
            
                    <Input value={taxId} type='Number' onChange={(e) => setTaxId(e.target.value)}  
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                        required/></div>
            
            <div>
                <Label htmlFor="GstId" className="text-gray-700 dark:text-white">GST Number</Label>
            
                    <Input value={gstNo} type='Number' onChange={(e) => setGstNo(e.target.value)}  
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                        required/></div>
            
            
            <div>
                <Label htmlFor="startdate" className="text-gray-700 dark:text-white">Start of the financial year</Label>
            
                    <Input value={startdate} type='date' onChange={(e) => setStartDate(e.target.value)}  
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                        required/></div>
            
            
            <div>
                <Label htmlFor="enddate" className="text-gray-700 dark:text-white">End of the financial year</Label>
            
                    <Input value={endDate} type='date' onChange={(e) => setEndDate(e.target.value)}  
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                        required/></div>
            
            <div>
                <Label htmlFor="annualrevenue" className="text-gray-700 dark:text-white">Total Annual Revenue</Label>
            
                    <Input value={annualRevenue} type='Number' onChange={(e) => setannualRevenue(e.target.value)}  
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                        required/></div>
            
            <div>
                <Label htmlFor="acno" className="text-gray-700 dark:text-white">Client's Bank Account Number</Label>
            
                    <Input value={acNo} type='Number' onChange={(e) => setAcNo(e.target.value)}  
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                        required/></div>
            
            
            <div>
                <Label htmlFor="actype" className="text-gray-700 dark:text-white">Type of accounting service</Label>
            
                    <Input value={acType} type='text' onChange={(e) => setAcType(e.target.value)}  
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                        required/></div>
            
            <div>
                <Label htmlFor="status" className="text-gray-700 dark:text-white">Status</Label>
            
                    <Input value={status} type='text' onChange={(e) => setStatus(e.target.value)}  
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                        required/></div>
            <div>
                <Label htmlFor="startNotes" className="text-gray-700 dark:text-white">Notes</Label>
            
                    <Input value={notes} type='text' onChange={(e) => setNotes(e.target.value)}  
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                        required/></div>
            
             </form>
          
          </Card>
            <div className="mt-3">
                  <Button onClick={()=>navigate('/dashboard')} className="w-full py-3 bg-blue-600 text-white rounded-md">Back</Button></div>
              
        </div>
  )
}

export default ClientView