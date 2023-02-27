
import { Flex,Text,Image, IconButton } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { MdPlaylistAdd } from "react-icons/md"
import { uuid } from "uuidv4"
import { PlaylistContext } from "../musicAppMain"
import {checkClicked,removeFromList} from '../utils/listReusables'

export const getArtists=(item)=>{
  
    const artists = item.artists.map(artist=>artist.name)
    return artists.join(', ')
}



const SearchItem =({item,dataID})=>{
    const {setCurrentPlaylist,currentPlaylist} = useContext(PlaylistContext)
    const [clicked,setClicked] = useState(false)
    const image = item.album.images[0].url
    const {name,id:trackID,preview_url:uri} = item
    const artists = getArtists(item)
    useState(()=>{
        if(checkClicked(trackID,currentPlaylist)){
            setClicked(true)
        }
    },[])
   

    const addToPlaylist=()=>{
        if (!checkClicked(trackID,currentPlaylist)){
            setCurrentPlaylist(state=>[...state,{trackID,uri,image,name,artists}])  
            setClicked(true)
        }
        else{
            removeFromList(trackID,currentPlaylist,setCurrentPlaylist)
            setClicked(false)
        }

   }
    return(
        
        <Flex h='10vh' w='100%' direction='row' m='1% 0%' justifyContent={'space-between'}>
        
        <Flex direction='row' h='inherit' w='70%'>
            <Image src={image} h='9.5vh' w='9.5vh' rounded='10px'/>
            <Flex direction='column' h='inherit' w='auto' justifyItems='start' alignItems='flex-start' margin={'0px 2%'}>
                <Text color='white' overflow='hidden' height='1.8rem' wordBreak='break-all' as='h4' m='0%'>{name}</Text>
                <Text color='white' height='1.8rem' overflow={'hidden'} m='0%' wordBreak={'break-all'} w='auto'>{artists}</Text>
            </Flex>
        </Flex>
        <IconButton 
                justifySelf={'flex-end'}
                alignSelf={'flex-end'}
                colorScheme={clicked?'teal':'white'}
                icon={<MdPlaylistAdd fill={clicked?'teal':'white'} size='50'/>}
                variant='solid'
                bg='transparent'
                onClick={addToPlaylist}  />

        </Flex>
    )
}
const SearchResuts =({searchList})=>{
    
    return(
        <Flex h='auto' w='80%' gap={{base:'20px', md:'15%'}} direction='column' justifyItems='center'>
            {searchList.map(i=><SearchItem key={i.id} item={i}/>)}
        </Flex>
    )

}
export default SearchResuts