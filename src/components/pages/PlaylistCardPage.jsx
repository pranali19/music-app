import { useLocation } from "react-router-dom"
import { Flex,Text,Box } from "@chakra-ui/react";
import { GetCard } from "../utils/getPrefferedSong";
import ShowError from "../utils/ShowError";
const PlaylistCard=()=>{
    const location=useLocation();
    const {playlists,searchText}=location.state
 
    return(
    
        <Flex  direction='column' w='98%' h='auto' p='2% 1%'>
        <Flex justifyContent='flex-start'>
            <Text as='h4' m='3px 2%' color='whitesmoke'>{searchText}</Text>
        </Flex>
        <Box justifyContent='center'  display='flex' w='100%' height='auto' direction='row' flexWrap='wrap' overflow='wrap' gap='10px'>
        {playlists.length?
        playlists.map(playlist=>
            <GetCard key={playlist.id} img={playlist.images[0].url} textVal={playlist.name} playlistVal={playlist}/>
        ):
        <ShowError 
            heightVal='60%'
            fontSize='1.8rem'
            iconSize='35'
        />}
        </Box>
    </Flex>
    )
}
export default PlaylistCard
