import {Text,Flex} from '@chakra-ui/react'
import {useContext,useEffect} from 'react'
import {TokenContext} from '../musicAppMain'
import getMusicGenre from '../../auth/getGenre'
const Preference = ['']
const SetPrefrencePage =()=>{
    const {authToken} = useContext(TokenContext)
    useEffect(()=>{
          getMusicGenre(authToken)  
    },[])
    return (
        <Flex direction='column' h='auto' w='100%'>
            <Text color='white' as='h2'>Preference</Text>
            <Flex>
            </Flex>
        </Flex>
    )
}
export default SetPrefrencePage