import {Divider, Flex, Grid, GridItem, resolveStyleConfig} from '@chakra-ui/react'
import {MusicAppMainStyle, themeColor} from './common.styled'
import {BrowserRouter} from 'react-router-dom'
import MainMenu from './mainMenu'
import song from './Image/song.mp3'
import { createContext, useEffect, useState } from 'react';
import getClientCred from '../auth/clientCred';

import SwitchPage from './utils/routes';
import { playSong } from '../auth/songPlay'


export const TokenContext = createContext();


export const PlaylistContext = createContext();
export const LoginContext = createContext();
const MusicAppMain =()=>{
    const [token,setAuthToken]=useState('')
    const [authError,setAuthError] =useState(false)
    const [tokenIsLoading,setTokenIsLoading] = useState(true)
    const [currentPlaylist,setCurrentPlaylist ]= useState([])
    const [resetToken,setResetToken]=useState(false)
    const [currentIndex,setCurrentIndex ] = useState(0)
    const [history,setHistory]=useState([])
    const [audio,setAudio] = useState(new Audio(null))
    const [currentDuration,setCurrentDuration]=useState(0)
    const [isPlaying, setIsplaying] = useState(null)

    useEffect(()=>{
        if(!token){
            getClientCred(setAuthToken,setAuthError,setTokenIsLoading)
        }
        return ()=>audio.pause
    },[])
    useEffect(()=>{
        getClientCred(setAuthToken,setAuthError,setTokenIsLoading)

    },[resetToken])
    const checkQueue = ()=>currentIndex+1 < currentPlaylist.length

    useEffect(()=>{
            let interval;
            
            if(isPlaying){    
                interval = setInterval(()=> {
                if (audio.readyState === 4){
                setCurrentDuration(Math.floor(audio.currentTime)+1)
                } 
               
                }
                ,1000)
            }     
   
    return ()=>clearInterval(interval)
    },[currentIndex,isPlaying])


    const PlaylistContextValue ={
        isPlaying:isPlaying, 
        setIsplaying:setIsplaying,
        currentPlaylist:currentPlaylist, 
        setCurrentIndex:setCurrentIndex ,
        setCurrentPlaylist:setCurrentPlaylist,
        currentIndex:currentIndex,
        audio:audio,
        currentDuration:currentDuration,
        setCurrentDuration:setCurrentDuration,
        setAudio:setAudio,
        setHistory:setHistory,
        history:history,
    }
    const tokenContextValue={
        authToken:token,
        setAuthToken:setAuthToken,
        authError:authError,
        setResetToken:setResetToken,
        setAuthError:setAuthError,        
        setTokenIsLoading:setTokenIsLoading,
        tokenIsLoading:tokenIsLoading}
    return (
        <TokenContext.Provider value={tokenContextValue}>
        <PlaylistContext.Provider value={PlaylistContextValue} >
            <BrowserRouter>
                <MusicAppMainStyle >
                        <MainMenu />
                      
                        <Flex minHeight='100vh' minWidth='100%'>
                        <SwitchPage />

                        </Flex>
                     
                        
                </MusicAppMainStyle>
            </BrowserRouter>
            </PlaylistContext.Provider>
        </TokenContext.Provider>
    )
}
export default MusicAppMain