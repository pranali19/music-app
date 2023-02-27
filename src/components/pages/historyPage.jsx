import { useNavigate } from "react-router-dom"
import { Flex,Image,Text} from '@chakra-ui/react'
import { useContext } from "react"
import { PlaylistContext } from "../musicAppMain"
import GradientText, { ColoredText } from "../utils/gradientText"
import '../../App.css'

const HistoryPage =()=>{
    const {history,setCurrentPlaylist,setCurrentIndex} = useContext(PlaylistContext)
    // const {setCurrentPlaylist,setCurrentIndex,currentPlaylist,currentIndex} = useContext(PlaylistContext)
   
    return (
        history.length?
        <Flex h='fit-content' direction={'column'} w='100%' minHeight='100vh'>
        <Flex p='1%' m='5% 0% 0% 5%'>
            <ColoredText message={'History'} fontSize='2rem' />
        </Flex>
            <Flex m='10vh auto' gap='10px' direction={'column'} h='fit-content' w='90%'>
                {
                    history.map((i,index)=>
                    <SinglePlayListItem 
                        item={i} 
                        key={i.trackID}
                        index={index} 
                        setCurrentIndex={setCurrentIndex}
                        setCurrentPlaylist={setCurrentPlaylist}/>
                )}
            </Flex>
        </Flex>:
        <GradientText message='No history available'/>

        )
}
const SinglePlayListItem =({item,dataID,index,setCurrentIndex,setCurrentPlaylist})=>{
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
                <p className='mobile-queue-text-art'>
                {artists}

                </p>
            </Flex>
        </Flex>
    )
}
export default HistoryPage