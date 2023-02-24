const authEndPoint= "https://accounts.spotify.com/authorize?";
const clientId= "00c8fc5370264e088bdc38376dc17632";
const redirectUri= "http://localhost:3000/login";
const scopes=["user-library-read","playlist-read-private"]

export const loginEndPoint=`${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
    &response_type=token&show_dialog=true`;

