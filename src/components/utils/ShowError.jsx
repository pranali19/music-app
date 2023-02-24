import { Flex,Text,Icon } from "@chakra-ui/react"
import {CiWarning} from 'react-icons/ci'

const ShowError=({errorMsg,heightVal,fontSize,iconSize})=>{

    return(
        <Flex h='100%' w='100%'>
        <Flex h={heightVal} w='auto'>
            <CiWarning size={iconSize} color='grey'></CiWarning>
            <Text color='grey' as='h3' fontSize={fontSize}>
                Oops! something went wrong
                {errorMsg}
            </Text>
        </Flex>
        </Flex>
    )
}
export default ShowError