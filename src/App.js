import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Input from './components/Input'
import Gallery from './components/Gallery';

function App() {

  const [items,setItems]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [query,setQuery]=useState('')

  let accessKey="Fe0Go3Uj-4o4OghmNQx62LzXYRYtSEQcCEZ2VPjPTg4";
  let secretKey="YJE_ZaqE_Gkh-o3G8WfUT5rRhBFfxTgF7REmf-M1y8Y"

  useEffect(()=>{

   const fetchItems=async()=>{

     const result=await axios.get(`https://api.unsplash.com/photos?client_id=${accessKey}&per_page=50&query=${query}`)

    
     setItems(result.data)
     setIsLoading(false)
     
   }

   fetchItems()
  },[query])

  useEffect(()=>{

    if(query.trim()==="")
    return

    const searchItems=async()=>{
 
      const result=await axios.get(`https://api.unsplash.com/search/photos?client_id=${accessKey}&per_page=50&query=${query}`)
 
      
      setItems(result.data.results)
      setIsLoading(false)
      
    }
 
    searchItems()
   },[query])

  return (
    <div className="container">
     <Header/>
     <Input getQuery={q=>(
       setQuery(q)
     )}/>
     <Gallery isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
