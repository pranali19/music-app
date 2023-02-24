import { Button, Center, Flex, Image, Text } from '@chakra-ui/react'
import { PlaylistContext } from '../musicAppMain'
import { useContext, useEffect, useState } from 'react'
import { removeFromList } from './listReusables'
import { QueueMbWrap, textQueueStyle } from '../common.styled'
import { useNavigate } from 'react-router-dom'
import '../../App.css'

const ShowBtn = ({ index }) => {
    const { currentPlaylist, currentIndex, setCurrentIndex, setCurrentPlaylist } = useContext(PlaylistContext)
    const playFromQueue = () => {
        setCurrentIndex(currentIndex + index)
    }
    const deleteFromQueue = () => {
        removeFromList(currentPlaylist[currentIndex + index].trackID, currentPlaylist, setCurrentPlaylist)
    }
    return (
        <Flex w='100%' wrap='nowrap' justifyContent='space-between'>
            <Button w='45%' onClick={() => playFromQueue()}>play</Button>
            <Button w='45%' onClick={() => deleteFromQueue()}>delete</Button>
        </Flex>
    )
}
export const Queue = ({ currentIndex, currentPlaylist }) => {
    const imageSrc = currentPlaylist[currentIndex] ? currentPlaylist[currentIndex].image[0].url : ''
    return (
        <Flex h='98vh' w='98%' mt='3%' rounded='lg' direction='column' p='2px 4%' bg='#171721'>
            <Center m='1% auto 6% auto'>
                <Text as='h3' color='white' fontWeight='500' fontSize='1.8rem'>Queue</Text>
            </Center>
            <Image src={imageSrc} h='150px' w='150px' m='1% auto' />
            <Flex h='100%' w='100%' overflow={'hidded'} direction='column'>
                {
                    currentPlaylist.slice(currentIndex).map((i, index) =>
                        index == 0
                            ?
                            <GetSongQueuePlaying name={i.name} />
                            :
                            <GetSongQueue name={i.name} index={index} />
                    )}
            </Flex>

        </Flex>
    )
}

export const MobileQueue = ({ currentIndex, currentPlaylist }) => {
    const navigate = useNavigate()
    const [hasQueue, setHasQueue] = useState(false)
    const index = currentIndex + 1
    useEffect(() => {
        if (currentPlaylist[index]) {
            setHasQueue(true)
        }
        console.log("hi")
    }, [currentIndex,])
    return (
        hasQueue ?
            <QueueMbWrap onClick={()=>navigate('/queue')}>
                <Image
                    src={currentPlaylist[index].image[0].url}
                    h='95%'
                    w='15%'
                    rounded='10px' />

                <Flex
                    direction='column'
                    justifyItems='start'
                    alignItems='flex-start'>

                    <Text
                        color='white'
                        as='h4'
                        m='0%'
                        paddingLeft='2%'>
                        {"NEXT : "+currentPlaylist[index].name}
                    </Text>

                <p
                className='mobile-queue-text-art'
                 >
                    {currentPlaylist[index].artists}
                    </p>
                </Flex>
            </QueueMbWrap>
            :
            ''
    )
}

const GetSongQueuePlaying = ({ name }) => {
    return (
        <Flex m='10px 1px' h='auto' rounded='md' bg={'rgba(255 255 255 / 20%)'} w='98%' wrap='nowrap' p='2.5px 1px'>
            <Flex m='4%' lineHeight='15px' alignItems='start' w='98%' direction='column' overFlow='hidden' wrap='nowrap'>
                <Text as='h4' sx={textQueueStyle}  >{name}</Text>
            </Flex>
        </Flex>
    )
}
const GetSongQueue = ({ name, index }) => {
    const [showButton, setShowButton] = useState(false)
    return (
        <Flex m='4%' lineHeight='15px' alignItems='start' w='98%' direction='column' overFlow='hidden' wrap='nowrap'>
            <Text as='h4'
                onClick={() => setShowButton(true)}
                sx={textQueueStyle}
            >
                {name}
            </Text>

            {
                showButton
                    ? <ShowBtn index={index} />
                    : ''
            }
        </Flex>
    )
}