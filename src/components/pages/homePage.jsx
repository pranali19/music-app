import GetPreferedSong from '../utils/getPrefferedSong'
import { Flex, Text } from '@chakra-ui/react'
import { themeColor } from '../common.styled'
import Login from '../../auth/login'
import { useContext } from 'react'
import { TokenContext } from '../musicAppMain'
import LoadingSpinner from '../utils/loadingSpinner'
import  {uuid} from 'uuidv4'



const homePageSearchText = ['Bollywood', 'Punjabi', 'Marathi', 'South Indian', 'English', 'global']

const HomePage = () => {
    const { tokenIsLoading} = useContext(TokenContext)

    return (
        tokenIsLoading?
            <LoadingSpinner />
            :
            <Flex direction={'column'} w='100%'>
                <Flex dir={'row'}>
                    <Text h='inherit' w='fit-content' color={'whiteAlpha.200'}>Prefrences</Text>
                </Flex>
                <Flex direction={'column'} w='inherit'>
                    {homePageSearchText.map(i =>
                        <GetPreferedSong key={i} searchText={i} />
                    )}
                </Flex>
            </Flex>
            
    )
}
export default HomePage