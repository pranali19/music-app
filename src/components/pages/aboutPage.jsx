import { Center, Flex, Text } from "@chakra-ui/react"
import { ColoredText } from "../utils/gradientText"

const AboutPage =()=>{
    return (
        <Flex minH='100vh' height='auto' w='100%' direction='column'>
        <Flex w='80%' h='fit-content' m='5% 8%'>
            <ColoredText message={'About'} fontSize='2rem'/>
        </Flex>
        <Flex p='1% 8%'>
            <Text color='white'>
                This app is built on the Spotify API and 
                offers a range of features, including the ability to
                 play next, play previous, pause/play, search, temporary history, and the ability to queue tracks.
                 <br/>
                 <br/>
                  The app uses Chakra UI, a library that provides a set of accessible and customizable UI components.
                   In addition to this, the app utilizes various API's provided by Spotify for playing music and the Search API for searching tracks. 
                 Overall, this app offers a comprehensive set of features built on the Spotify API, providing users with an enjoyable and engaging music listening experience.
                    <br/>
                    <br/>
                Limitation:-

                 This WebApp doesn't require logging in to spotify account, which limits its functionality. Spotify Api's only allow 30s preview.


            </Text>
        </Flex>
        </Flex>
    )
}
export default AboutPage