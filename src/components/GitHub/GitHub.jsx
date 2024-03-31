import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
const data = useLoaderData();


    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/shiprasaini99')
    //     .then((res)=> res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])


  return (
    <div className='text-center m-4 bg-gray-500 text-white'>
      GitHub Repos : {data?.public_repos}
      <img src={data.avatar_url} alt="Git Profile pic" width={500} />
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/shiprasaini99')
    return response.json();
}