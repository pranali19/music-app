
export const playSong=async (uri,authToken)=>{
    const url = `https://api.spotify.com/v1/me/player/play`


    await fetch(url,{
        method:"PUT",
        "context_uri":uri,
        "offset":{
            "position":5
        },
        Headers:{
        "Accept":"application/json",
        "Content-Type":"application/json",
        'Authorization':'Bearer '+authToken
        }
        }
    ).then(res=>
        res.json()
    ).then(res=>
        console.log(res)
    ).catch(e=>console.log("error",e))
}