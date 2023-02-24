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
            ref={ref}
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


const MusicPlayer = ({setIsplaying,isPlaying}) => {
  
    const {
        history,
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
        setIsplaying(true)        
        if(!audio.error){
            audio.play()
        }else{
            audio.pause()
        }
    },[audio])
 
    useEffect(()=>{  
        if(currentDuration > Math.floor(audio.duration)+2 ){
            if(currentIndex < currentPlaylist.length-1){
                setAudio(new Audio(currentPlaylist[currentIndex+1].uri))
                setCurrentDuration(0)
                setCurrentIndex(state=>state+1) 
            }
            setIsplaying(false)
        }
    },[currentDuration])

    const setHistoryList=()=>{
        const historyList = history.filter(i=>i.trackID !== currentPlaylist[currentIndex].trackID )
        setHistory([currentPlaylist[currentIndex] ,...historyList])
    }
    const onScrub = (value,setCurrentDuration) => {
 
    }
    const checkAndSetTrack=(indx)=>{
        if(indx >= 0 & indx < currentPlaylist.length){
        setAudio(new Audio(currentPlaylist[indx].uri))
        setCurrentIndex(indx)
        return true
        }
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
        setIsplaying(state=>!state)
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
                    setCurrentDuration={setCurrentDuration} 
                    setIsplaying={setIsplaying} 
                    isPlaying={isPlaying} 
                    onScrub={onScrub} 
                    setHistoryList={setHistoryList}
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