import React, { useEffect, useState } from 'react'

export const  Quotes=()=> {
    const [quotes, setQuotes] = useState([]);
const [count,setcount]=useState(1)
    useEffect(()=>{
        const fetchData = async () => {
            await fetchapidetails();
          }
          fetchData();


    },[])

    const fetchapidetails = async()=>{
        try{
       const  url= await fetch('https://dummyjson.com/quotes')
       const Quotesdata = await url.json()
       setQuotes(Quotesdata.quotes)
       console.log(Quotesdata)
        setcount(count+1)}
        catch(e){
            e.error("error occurred")
        }
    }
    
  return (
    <div>
      <button onClick={()=>fetchapidetails()

      }>get api details </button>
      {
        quotes.map((item,index)=>{
 if(item.id === count){
return(
    <div key={index}>
     <h1> {item.quote}</h1>
    </div>

)
     }     })
      }


    </div>
  )
}

