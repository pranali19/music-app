
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Box,
} from '@chakra-ui/react'


const SliderComponent = ({currentDuration,audio}) => {
    
    
    return (
        <Slider
            aria-label='slider-ex-4'
            min={0}
            step={1}
            max={audio.duration}
            value={currentDuration}
            // onChange={e => onScrub(e,setCurrentDuration)}
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