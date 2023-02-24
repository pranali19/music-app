import { Buffer } from "buffer"
import { useContext } from "react"
import { TokenContext } from "../components/musicAppMain"
import getClientCred from "./clientCred"




const dispatchSearch =async (searchText,authToken,setAuthToken,setAuthError,setSearchError,setSearchList)=>{
    const url = `https://api.spotify.com/v1/search?q=${searchText}&type=track&limit=20&access_token=${authToken}`
    
        await fetch(url,{
        method:'GET',
        headers:{
            "Accept": 'application/json',
            'Content-Type':'application/json',
        }
    })
    .then(res=>{ 
        if(res.status==401){
            return getClientCred(setAuthToken,setAuthError)}
        else{
            return res.json()}})
    .then(res=>{
        setSearchList(res.tracks.items)
      
    })
    .catch(e=>{
        console.warn('error',e)
            setSearchError(true)
        })

 
}
export default dispatchSearch 

