import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {  ThreeCircles } from "react-loader-spinner";
import ReactStars from "react-stars"
import { moviesRef } from "./firebase/firebase";
import { Link } from "react-router-dom";

export default function Cards() {
  const [data, setData] = useState([]);

  const [loading,setLoading] = useState(false)

  useEffect(()=>{
  async function getData(){
    setLoading(true)

    const _data = await getDocs(moviesRef)
     _data.forEach((doc)=>{
      setData((prev)=>[...prev,{...(doc.data()), id: doc.id}])
     })

    setLoading(false)
  }
 getData();
  },[])

  

  return (
    <div className=" flex flex-wrap justify-evenly p-3 mt-2">
     {loading ? <div className="flex justify-center items-center w-full h-96"> <ThreeCircles height={100} color="white"/> </div> :
      data.map((e, i) => {
        return (
         <Link to={`/details/${e.id}`}><div className="card shadow-lg p-2 hover:-translate-y-3 transition-all duration-500  cursor-pointer  font-medium mt-6">
            <img className="h-72" src={e.image} />
            <h1>Name: {e.title}</h1>
            <h1 className=" flex items-center mr-1">Rating: 
            <ReactStars 
            size={20}
            half={true}
            value={5}
            edit={false}
            />
             </h1>
            <h1> Year:{e.year}</h1>
          </div>
          </Link> 
        );
      })
}
    </div>
  )
  }
