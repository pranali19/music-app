import {Queue} from '../utils/queue'
import { PlaylistContext } from '../musicAppMain'
import { useContext} from 'react'
import { Center,Text } from '@chakra-ui/react'

const QueuePage=()=>{
    const { currentIndex, currentPlaylist } = useContext(PlaylistContext)
    return(
        currentPlaylist.length?
        <Queue 
            currentIndex={currentIndex} 
            currentPlaylist={currentPlaylist} />
        :
        <Center>
        <Text> no Queue</Text>
        </Center>
    )
}
export default QueuePage