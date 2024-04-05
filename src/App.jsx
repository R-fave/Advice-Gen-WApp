import axios from "axios"
import { useState, useEffect } from "react"



export default function App() {
  const [advice, setAdvice] = useState('')
  const [imageURL, setImageURL] = useState('')
  
  console.log(advice.length)

    const genAdvice = ()=>{
        axios.get('https://api.adviceslip.com/advice').then((res)=>{
        console.log(res.data.slip.advice)
        setAdvice(res.data.slip.advice)
        
        
        })
    }
    

  

  useEffect (()=>{
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${advice}&client_id=7Ix-Vc_I3EFT1NTJqycPSJvem2pFGjvy_kmDUaIWJQQ`).then((res)=>{
      console.log(res.data.results[0].urls.regular)
      setImageURL(res.data.results[0].urls.regular)
    })
  },[advice])
  
  return (
    <div style={{backgroundImage: advice.length > 0  ? `url(${imageURL})` : `url('https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg')`}} className=" w-screen h-screen bg-cover bg-center bg-no-repeat p-24 flex justify-center items-center">
      
      <div className=" 
        bg-white/45 lg:max-w-[50vh] lg:max-h-[50%] 
        lg:h-[50%] max-lg:px-5 max-sm:px-4 rounded-md 
        flex justify-between items-center flex-col lg:pt-[2rem] 
        lg:px-6 max-lg:pt-[3rem] max-lg:pb-[2rem] backdrop-blur-md ">
        <div className=" 
          lg:w-[40vh] w-40 h-40 lg:px-5 
          max-lg:w-[40vh] text-white 
          bg-gray-600/40 rounded-md p-2">
          <p className=" text-center max-sm:my-10 lg:my-8 font-palanquin font-bold">
            {advice}
          </p>
        </div>
        <button onClick={genAdvice} 
          className=" max-lg:mt-10 bg-slate-500 text-white 
          p-2 rounded-md lg:mb-8 lg:mt-5">
            Generate Advice
        </button>
      </div>
      
    </div>
    
  )
}