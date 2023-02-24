import {Buffer} from 'buffer'

const getClientCred=async (setAuthToken,setAuthError,setTokenIsLoading)=>{
    const urlencode=new URLSearchParams();
    urlencode.append("grant_type","client_credentials")
    const clientId ='00c8fc5370264e088bdc38376dc17632';
    const clientSecret= '5d3929b11de448e084a4473d557bb2e5';
    const authorize = 'Basic '+Buffer.from(clientId+':'+clientSecret).toString('base64')
    const authOptions={
        method:"POST",
        headers:{
            'Content-type':'application/x-www-form-urlencoded',
            'Authorization':authorize,
        },
        body:urlencode,
    };
    
    await fetch('https://accounts.spotify.com/api/token',authOptions)
    .then(res=>{
        if(res.status>= 400){
            setAuthError(true)
            setTokenIsLoading(false)
        }
        else{
            return res.json()}
    })
    .then( res=>{
            setAuthToken(res.access_token) 
            setTokenIsLoading(false)
    }
        )
    .catch(e=>{
        setTokenIsLoading(false)
        console.log(e)
    })
    console.log("ran")

}
export default getClientCred;