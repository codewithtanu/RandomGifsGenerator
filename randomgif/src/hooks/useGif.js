import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const API_KEY='15GExgggMyWOHFYa9ZQ6P4YxODWbvUMk';
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
const useGif=(tag)=>{
    const [gif,setgif]=useState('');
    const[loading,setloader]=useState('false');

    async function fetchdata(tag){
      setloader(true);
        const {data}= await axios.get(tag?`${url}&tag=${tag}`:url);
         const imagesourse=data.data.images.downsized_large.url;
         setgif(imagesourse);
         setloader(false);

    }
    useEffect(()=>{
        fetchdata();
    },[])
    return {fetchdata,gif,loading}
}
export default useGif;