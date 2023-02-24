
const getMusicGenre=(token)=>{
    const url=`https://api.spotify.com/v1/recommendation/available-genre-seeds&access_token=${token}`
    fetch(url,{
        method:'GET',
        headers:{
            "Accept": 'application/json',
            'Content-Type':'application/json',   
        }
    }).then(res=>res.json())
    .then(res=>console.log(res))
}
export default getMusicGenre