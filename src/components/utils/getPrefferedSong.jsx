import img from '../Image/shang gu.jpg'
import {Card,CardBody,CardFooter,Image, Flex, Text, Box, Button} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import {TokenContext} from '../musicAppMain'
import getHomePlaylist from '../../auth/getHomePlaylist'
import {CardWrapper, showAllBtnStyle} from '../common.styled'
import {Redirect,useNavigate} from 'react-router-dom'
import ShowError from './ShowError'

const boxHeight={base:'fit-content',md:'13em'}
const cardHeight={base:'14em',sm:'15em',md:'13em'}
const cardWidth ={base:'14em',sm:'16em',md:'14em'}
export const GetCard =({img,textVal,playlistVal})=>{
    const navigate = useNavigate()
    const navigateToPlaylist = ()=>{
        navigate('/show-play-list',{state:playlistVal})
    }
    return(
        <CardWrapper onClick={()=>navigateToPlaylist()}>
            <Card 
                rounded='5%' 
                h={cardHeight} 
                w={cardWidth} 
                bg='linear-gradient(185deg, black, #121111)'>

                <CardBody 
                    display='flex' 
                    flexDirection={'column'} 
                    h='inherit' 
                    w='inherit' 
                    m='auto auto' 
                    justifyContent='center' 
                    alignItems='center'>

                    <Image src={img} rounded='10px' h='85%' w='85%'  />    
                    <Text 
                        display='-webkit-box' 
                        overflow='hidden' 
                        p={'0px'} 
                        textAlign='center' 
                        m='1% auto' 
                        color={'white'}
                        css={{'-webkit-line-clamp':'1','-webkit-box-orient':'vertical'}}>
                    {textVal}</Text>
                </CardBody>
            </Card>
        </CardWrapper>
    )
}
const GetPreferedSong=({searchText})=>{
    const {authToken,setResetToken} = useContext(TokenContext)
    const [playlists,setPlayLists] = useState([]);
    const navigate = useNavigate();
    const [playlistError,setPlaylistError] = useState(false)
     useEffect(()=>{
         getHomePlaylist(authToken,searchText,setPlayLists,setPlaylistError,setResetToken)
        },[])


    function handleClickShowAll(){
        navigate('/playlist-show-all',{state:{playlists:playlists,searchText:searchText}})
    }

    return(
        <Flex direction='column' w='100%' p='2% 1%'>
            <Flex justifyContent='space-between' p='1%'>
                <Text as='h4' m='3px' color='whitesmoke'>{searchText}</Text>
                <Button onClick={handleClickShowAll} sx={showAllBtnStyle} >Show All </Button>
            </Flex>
        {!playlistError?
            <Box  
                display='flex' 
                w='100%' 
                height={boxHeight} 
                justifyContent={{base:'flex-start',md:'space-evenly'}} 
                direction='row' 
                flexWrap={{base:'nowrap', md:'wrap'}} 
                overflow={{base:'scroll hidden', md:'hidden'}}
                gap='10px'>
        
            {playlists.map(playlist=>
                <GetCard img={playlist.images[0].url} textVal={playlist.name} playlistVal={playlist} />
            )}
            </Box>
    
        :
        <Flex h='100%' w='100%'>
            <ShowError
                heightVal='60%'
                fontSize={{base:'1.5rem', sm:'1.8rem'}}
                iconSize='35'
            />
        </Flex>}
        </Flex>

    )
}
export default GetPreferedSong