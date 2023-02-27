
import { Flex,Image,Text} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { PlaylistContext } from '../musicAppMain'
import MusicPlayer from '../utils/MusicPlayer'
import {QueueWrapper,PlayerMainWrapper} from '../common.styled'
import {Queue,MobileQueue} from '../utils/queue.jsx'
import GradientText from '../utils/gradientText'


const PlayerPage=()=>{
    const {currentPlaylist,currentIndex,setCurrentIndex} = useContext(PlaylistContext)


 
    if(currentPlaylist[currentIndex]){
        var {image,name,artists} =currentPlaylist[currentIndex]
    }



    return (
        currentPlaylist.length?
        <Flex h='100vh' minH='100vh' w='100%' direction='row' >
        <PlayerMainWrapper>

            <Image 
                src={image?image[0].url:''}
                h='50vh'
                w='50vh'
                m='8% auto 2% auto'
                bg='white'
                rounded='xl' />

                <Flex width='75%' direction='column' alignSelf={'center'} p='1% 0'>

                <Text 
                    textAlign='start' 
                    as='h3' 
                    fontWeight='600'
                    fontSize={'1.3rem'} 
                    color='white'>{name}</Text>

                <Text 
                    as='h4' 
                    height='2rem' 
                    overflow='hidden' 
                    wordBreak='break-all'
                    fontSize={{base:'0.8rem',sm:'1.1rem' }}
                    textAlign='start' 
                    color='white'>{artists}</Text>

            </Flex>
           <MusicPlayer  />
        </PlayerMainWrapper>
        
        <QueueWrapper >
            <Queue 
                setCurrentIndex={setCurrentIndex}
                currentPlaylist={currentPlaylist}
                currentIndex={currentIndex}  />
        </QueueWrapper>
        <MobileQueue 
            currentPlaylist={currentPlaylist}
            currentIndex={currentIndex} 
        />
        </Flex>
        :
        <GradientText message='No Song in the Playlist'/>
    )
}
export default PlayerPage