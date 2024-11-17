import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'

const MyAppointment = () => {
    const {user} = useContext(AuthContext);

    const [localSavedData,setLocalSavedData] = useState()

    useEffect(()=>{
        let saveData = [];
        const localData = localStorage.getItem("appointment");
        if(localData){
            saveData = JSON.parse(localData)
        }
    
       const userData =  saveData.filter((data)=>data.email===user?.email);
       console.log(userData)
       setLocalSavedData(userData)
    },[])
    
  return (
    <div className='flex gap-4 flex-wrap container mx-auto items-center justify-center mt-10'>
      {
        localSavedData?.map((data)=>(
            <div className='flex flex-col gap-3 p-10 rounded-3xl shadow-md bg-slate-700'>
                <p>First-Name: {data.fname}</p>
                <p>Last-Name: {data.lname}</p>
                <p>Phone-Number:{data.number}</p>
                <p>Email:{data.email}</p>
                <address>Address:{data.address}</address>
            </div>
        ))
      }
    </div>
  )
}

export default MyAppointment
