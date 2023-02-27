import { useEffect, useRef, useState } from 'react'

import {PlaylistContext} from '../musicAppMain'
import { GiNextButton, GiPauseButton, GiPlayButton, GiPreviousButton } from 'react-icons/gi'
import {
    Input,
    Flex,
    IconButton
} from '@chakra-ui/react'
import {musicPlayerStyle} from '../common.styled'
import { useContext } from 'react'
import SliderComponent from './sliderComp'


const GetIcon = ({ onClick, icon,disabled,ref }) => {
    
    return (
        <IconButton
            isDisabled={disabled}
            colorScheme={'white'}
            icon={icon}
            // ref={ref}
            variant='solid'
            bg='transparent'
            onClick={() => onClick()} />
    )
}
const PlayButton = ({ isPlaying }) => {
    
    return (
        !isPlaying ?
            <GiPlayButton size='25' /> :
            <GiPauseButton size='25' />
    )
}


const MusicPlayer = () => {
  
    const {
        history,
        setIsplaying,
        isPlaying,
        currentDuration,
        setCurrentDuration,
        setHistory,
        audio,
        setAudio,
        currentIndex,
        setCurrentIndex,
        currentPlaylist } = useContext(PlaylistContext)

    const nextRef = useRef()



    useEffect(()=>{
        setHistoryList() 
        if(!audio.error)  {
        audio.play()
        setIsplaying(true)
        }else{
        audio.pause()
        setIsplaying(false)}
    },[audio])

    useEffect(()=>{  
     

        if( currentDuration >= audio.duration || audio.ended){
            if(currentIndex < currentPlaylist.length-1){
            
                setAudio(new Audio(currentPlaylist[currentIndex+1].uri))
                setCurrentIndex(state=>state+1) 
            }
            else if(currentIndex == currentPlaylist.length-1){
                        setIsplaying(false)
                audio.pause()
                
            }
            else{
                setIsplaying(false)
                audio.pause()
               
            }
            }

    },[currentDuration])

    const setHistoryList=()=>{
        const historyList = history?history.filter(i=>i.trackID !== currentPlaylist[currentIndex].trackID ):[]
        setHistory([currentPlaylist[currentIndex] ,...historyList])
    }
    const onScrub = (value,setCurrentDuration) => {
 
    }
    const checkAndSetTrack=(indx)=>{
        if(indx >= 0 && indx < currentPlaylist.length){
        setAudio(new Audio(currentPlaylist[indx].uri))
        setCurrentIndex(indx)
        setCurrentDuration(0)
        return true
        }
        setCurrentDuration(0)
        return false
    }
    const onClickPrev = () =>  {
        audio.pause()
        setIsplaying(checkAndSetTrack(currentIndex-1))
      
    }
    const onClickNext = () =>{
         audio.pause()
        setIsplaying(checkAndSetTrack(currentIndex+1))
        

    }
        
    const onClickPlay = () => {
        if(isPlaying == null){
            setAudio(new Audio(currentPlaylist[currentIndex].uri))
            setIsplaying(true)
        }
        else{
            setIsplaying(state=>!state)
        }
        
        if(!audio.error){
            if (isPlaying == true) {
                audio.pause()
                setIsplaying(false)
            }else {
                audio.play()
                setIsplaying(true)
            }
        }
        else{
            setIsplaying(false)
            setAudio(new Audio(currentPlaylist[currentIndex].uri))
           
        }

    }

    return (
        <Flex sx={musicPlayerStyle} >
            <Flex w={{base:'85%' , sm:'70%'}} h='fit-content'>
                <SliderComponent 
                    currentDuration={currentDuration} 
                    onScrub={onScrub} 
                    audio={audio} />
            </Flex>
            <Flex h='auto' w={{base:'90%' ,sm:'80%'}} justifyContent='space-around'>
                <GetIcon
                    disabled={currentIndex==0?true:false}
                    icon={<GiPreviousButton size='25' />}
                    onClick={onClickPrev} />
                <GetIcon
                    icon={<PlayButton isPlaying={isPlaying} />}
                    onClick={onClickPlay} />
                <GetIcon
                    ref={nextRef}
                    disabled={currentIndex==currentPlaylist.length-1?true:false}
                    icon={<GiNextButton size='25' />}
                    onClick={onClickNext} />
            </Flex>
        </Flex>
    )
}

export default MusicPlayer