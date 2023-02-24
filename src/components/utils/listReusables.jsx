export const checkClicked=(trackID,currentPlaylist)=>{
    for(let track of currentPlaylist){
        if(track.trackID == trackID){
            return true
        }
    }
    return false

}
export const removeFromList=(trackID,currentPlaylist,setCurrentPlaylist)=>{
    let newList=currentPlaylist.filter(i=>i.trackID!=trackID)
    setCurrentPlaylist(newList)
}