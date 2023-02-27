import { Flex,Text } from "@chakra-ui/react"
 
export const ColoredText=({message,textType,fontSize})=>{
    return(
        <Text
        bg='linear-gradient(45deg, #6c9bc7, #ff6161)'
        css={{
            'WebkitBackgroundClip': 'text',
            'WebkitTextFillColor': 'transparent'
        }} 
        as={textType?textType:'h1'}
        fontWeight={'800'} 
        fontSize={fontSize?fontSize:'3rem'}
        fontFamily='fangsong' 
        color='white'>

        {message}
    </Text>
    )
}

const GradientText=({message,textType})=>{

    return (
        <Flex h={'100vh'} w={'100%'} justifyContent='center' alignContent='center' m='auto'>
            <Flex 
                h='fit-content' 
                m='auto' 
                w='fit-content'   
                rounded='md'>
  <ColoredText message={message} />

            </Flex>
        </Flex>
    )
}
export default GradientText