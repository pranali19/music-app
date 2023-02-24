import getClientCred from "./clientCred";

const getPlaylistFromUrl=async (playlistID,authToken,setAuthToken,setAuthError,setPlayLists,setPlaylistError)=>{
    const url = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;
    


    await fetch(url,{
        method:'GET',
        headers:{
            "Accept": 'application/json',
            'Content-Type':'application/json',
            'Authorization':'Bearer '+authToken
        }
    })
    .then(res=>{ 
        if(res.status==401){
            return getClientCred(setAuthToken,setAuthError)}
        else{
            return res.json()}})
    .then(res=>{
        setPlayLists(res.items)
      
    })
    .catch(e=>{
        console.warn('error',e)
            setPlaylistError(true)
        })
}
export default getPlaylistFromUrl