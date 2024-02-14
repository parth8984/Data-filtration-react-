import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [data, setdata] =useState([]);

 
  useEffect(()=>{
    fetch(" https://fakestoreapi.com/products/").then((result)=>{
   const parth =  result.json().then((parth)=>{
    const menProducts = parth.filter(item => item.category !== "men's clothing");
      setdata(menProducts)
     }) 

  })
},[])
  
  return (
   <div>
    <h1>Filteration of Product With the help of Get Api </h1>
 <div id='Main-div'>
 {
    data.map((item)=>
    <div id='sub-div'>
    <img src={item.image}/>
    <h5>{item.title}</h5>
    <div id='price'> Price: <span>{item.price}</span></div>
  </div>
    
   )}
</div>


  


 </div>
  )
 
  }
  
export default App;