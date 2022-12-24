import React, { createContext, useState,useEffect } from 'react'
import { data as infos } from '../services/AppService'
const ApiContext = createContext()

const ApiContextProvider = ({children}) =>{
  const [data,setData] = useState(infos)
  //   const token = 'W9sAe43DCiTWTKpeW23clVxKPzzj8TEmmIXjkw8f'
  //   useEffect(()=>{
  //       const fetchData = () =>{
  //       fetch("https://devcef.com/api/all",{
  //           headers:{"Authorization":`Bearer ${token}`}
  //       })
  //       .then((response)=>response.json())
  //       .then((result)=>{
  //           console.log(result)
  //           setData(result.data)
  //       })
  //       .catch((error)=>console.log("An error occured",error))
  //   }
  //   fetchData()
  // },[])
  return (
    <ApiContext.Provider value={data}>
        { children }
    </ApiContext.Provider>
  )
}
export { ApiContext, ApiContextProvider }
