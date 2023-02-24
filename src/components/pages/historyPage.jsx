import { useNavigate } from "react-router-dom"
import { getArtists } from "../utils/searchList"
import {Center, Flex,Image,Text} from '@chakra-ui/react'
import { useContext } from "react"
import { PlaylistContext } from "../musicAppMain"
const HistoryPage =()=>{
    const {history,setCurrentPlaylist,setCurrentIndex} = useContext(PlaylistContext)
    // const {setCurrentPlaylist,setCurrentIndex,currentPlaylist,currentIndex} = useContext(PlaylistContext)
   
    return (
        history.length?
        <Flex h='fit-content' w='100%' minHeight='100vh'>
            <Flex m='10vh auto' direction={'column'} h='fit-content' w='90%'>
                {
                    history.map((i,index)=>
                    <SinglePlayListItem 
                        item={i} 
                        index={index} 
                        setCurrentIndex={setCurrentIndex}
                        setCurrentPlaylist={setCurrentPlaylist}/>
                )}
            </Flex>
        </Flex>:
        <Center h='100vh' w='100%'>
        <Text as='h3'  fontSize={'1.8rem'} color='grey'>No history available</Text>
        </Center>
        )
}
const SinglePlayListItem =({item,index,setCurrentIndex,setCurrentPlaylist})=>{
    const navigate = useNavigate()
    const trackID = item.trackID
    const uri = item.uri
    const image = item.image[0].url
    const name = item.name
    const artists = item.artists
   
    const playSongHistory = ()=>{
        setCurrentPlaylist([{trackID,uri,image,name,artists}])
        setCurrentIndex(0)
        navigate('/player')
    }

    return(
        <Flex h='10vh' w='80%' direction='row' m='1% 0%' gap='4%'>
            <Image onClick={playSongHistory} src={image} h='9.5vh' w='9.5vh' rounded='10px'/>
            <Flex direction='column' justifyItems='start' alignItems='flex-start'>
                <Text color='white' as='h4' m='0%'>{name}</Text>
                <Text color='white' >{artists}</Text>
            </Flex>
        </Flex>
    )
}
export default HistoryPage