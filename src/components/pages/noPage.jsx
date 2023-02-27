import {Flex,Center} from '@chakra-ui/react'
import { ColoredText } from '../utils/gradientText'
const NoPage =()=>{
    return (
        <Flex h='100%' w='100%'>
            <Center>
                <ColoredText message={'404 page not found'} />
            </Center>
        </Flex>
    )
}
export default NoPage