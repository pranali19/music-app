import { useEffect,useContext } from 'react'

import {  PlaylistContext, } from '../musicAppMain'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Box,
} from '@chakra-ui/react'


const SliderComponent = ({setCurrentDuration,currentDuration,isPlaying,onScrub}) => {
    // var interval;
    const {audio} = useContext(PlaylistContext)

    // useEffect(()=>{
    //     if(isPlaying && audio.networkState == 1){
    //         interval = setInterval(()=> 
    //             setCurrentDuration(state=>state+1)
    //         ,1000)
    //     }else{
    //     return ()=> clearInterval(interval)
    //     }
    // },[isPlaying])





    return (
        <Slider
            aria-label='slider-ex-4'
            min={0}
            step={1}
            max={audio.duration}
            value={currentDuration}
            onChange={e => onScrub(e,setCurrentDuration)}
        >
            <SliderTrack bg='red.100'>
                <SliderFilledTrack bg='tomato' />
            </SliderTrack>
            <SliderThumb boxSize={4} >
                <Box color='tomato'></Box>
            </SliderThumb>
        </Slider>
    )
}
export default SliderComponent