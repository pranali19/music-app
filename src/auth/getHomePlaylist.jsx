import { Buffer } from "buffer"

import getClientCred from "./clientCred"




const getHomePlaylist =async (authToken,searchText,setPlayLists,setPlaylistError,setResetToken)=>{
    const url = `https://api.spotify.com/v1/search?q=${searchText}&type=playlist&limit=10&access_token=${authToken}`
  
        await fetch(url,{
        method:'GET',
        headers:{
            "Accept": 'application/json',
            'Content-Type':'application/json',
        }
    })
    .then(res=>{ 
        if(res.status==401){
            console.log(res.status)
            setResetToken(true)
        }
        else{
            return res.json()}})
    .then(res=>setPlayLists(res.playlists.items))
    .catch(e=>setPlaylistError(true))

 
}
export default getHomePlaylist