import { Flex, IconButton, Image ,ListItem,Text} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { PlaylistContext, TokenContext } from "../musicAppMain"
import { SearchItem } from "../utils/searchList"
import {MdPlaylistAdd} from 'react-icons/md'
import {getArtists} from '../utils/searchList'
import getPlaylistFromUrl from '../../auth/getPlaylistFromUrl';
import { bannerImg, smallImgStyle } from "../common.styled"
import {removeFromList,checkClicked} from '../utils/listReusables'


const SmallImage=({src})=>{
    return(
        <Flex>
            <Image src={src} />
        </Flex>
    )
}

const SinglePlayListItem =({item})=>{
    const navigate = useNavigate()
    const [clicked,setClicked] = useState(false)
    const {setCurrentPlaylist,setCurrentIndex,currentPlaylist,currentIndex} = useContext(PlaylistContext)

    const {name,preview_url:uri,id:trackID} =item.track
    const artists = getArtists(item.track)
    const image = item.track.album.images
    console.log(image)
    useEffect(()=>{
        if(checkClicked(trackID,currentPlaylist)){
            setClicked(true)
        }
    },[])

    const onClickPlaySong =  async ()=>{
        setCurrentPlaylist([{trackID,uri,name,artists,image}])
        setCurrentIndex(0)
        navigate('/player')
    }
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
 
    const textStyle={   
        color:'white' ,
        overflow:'hidden',
        wordBreak: 'break-all',
        textAlign:'left',
        height: '1.9rem'
    }

    const songInfo = {setCurrentIndex,setCurrentPlaylist,navigate,trackID,uri,image,name,artists}
    return(
        <Flex h='10vh' w='100%' direction='row' m='1% 0%' justifyItems='space-between'>
            <Flex h='10vh' w='100%' direction='row' gap='4%'>
                <Image 
                    onClick={()=>onClickPlaySong(songInfo)} 
                    src={image.length?image[0].url:''} 
                    h='9.5vh' 
                    w='9.5vh' 
                    rounded='10px'/>

                <Flex direction='column' justifyItems='start' alignItems='flex-start'>

                    <Text 
                        sx={textStyle}
                        as='h4' 
                        m='0%'>{name}</Text>
                    <Text 
                     sx={textStyle}>{artists}</Text>
                </Flex>
            </Flex>
            <IconButton 
                alignSelf={'right'}
                colorScheme={clicked?'teal':'white'}
                icon={<MdPlaylistAdd fill={clicked?'teal':'white'} size='50'/>}
                variant='solid'
                bg='transparent'
                onClick={() => addToPlaylist()}  />
        </Flex>
    )
}
const PlaylistComp = ({list})=>{
    const {authToken,setAuthToken,setAuthError} = useContext(TokenContext)
    const [playList ,setPlayLists] = useState([]);
    const [playlistError ,setPlaylistError] =useState(false);
    const playlistID= list.id
    useEffect(()=>{
        getPlaylistFromUrl(playlistID,authToken,setAuthToken,setAuthError,setPlayLists,setPlaylistError)
    },[])

    return(
        
        <Flex direction='column' w='90%' m='0% auto '>
           {playList?
            playList.map(item=><SinglePlayListItem item={item}/>
           ):
           ''
           }
        </Flex>
    )
}

const ShowPlaylist=()=>{
    const value = useLocation().state

    return(
        <Flex h='auto' w='100%' direction={'column'}>
            <Flex sx={bannerImg} backgroundImage={value.images[0].url} />
            
            <Image sx={smallImgStyle} src={value.images[1]?value.images[1].url:value.images[0].url} />
            <PlaylistComp list={value}/>
        </Flex>
    )
}
export default ShowPlaylist