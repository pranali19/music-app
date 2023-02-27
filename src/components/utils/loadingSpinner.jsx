import {Spinner,Flex,Center} from '@chakra-ui/react'

const LoadingSpinner = ()=>{
    return(
        <Flex height='100%' w='100%'>
        <Center h='100%' w='100%'>
            <Spinner 
                m='auto'
                thickness='5px'
                speed='0.65s'
                emptyColor='transparent'
                color='blue.500'
                size='xl'
            />
            </Center>
        </Flex>
    )
}
export default LoadingSpinner