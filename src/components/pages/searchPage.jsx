import {Stack,InputGroup,Button,InputLeftElement,Flex,Input,Center, Text} from '@chakra-ui/react'
import {Search2Icon} from '@chakra-ui/icons'
import { useContext, useEffect, useRef, useState } from 'react'
import {TokenContext} from '../musicAppMain'
import dispatchSearch from '../../auth/dispatchSearch'
import SearchResuts from '../utils/searchList'
import ShowError from '../utils/ShowError'
import {searchButtonStyle} from '../common.styled'
import { ColoredText } from '../utils/gradientText'
    
const SearchBar=({searchRef})=>{
    return(
        <Stack w={{base:'80%',sm:'60%'}} spacing={4} >
    
            <InputGroup>
                <InputLeftElement h={'100%'} p={'0px 1rem'} top='auto' bottom='auto' left='1%' children={<Search2Icon  color='gray'/>}/>
                <Input 
                    ref={searchRef} 
                    paddingStart={'2rem'} 
                    color='white' 
                    bg='#81818152' 
                    h='30px' 
                    w='100%' 
                    p={{base:'0.1% 20%',sm:'0.1% 15%' }}
                    rounded='10px' 
                    placeholder='Search' />
            </InputGroup>
        </Stack>
    )
}

const SearchPage =()=>{
    const {authToken,setAuthToken,setAuthError} = useContext(TokenContext)
    const [searchList,setSearchList] = useState([])
    const searchRef = useRef()
    
    const [searchError,setSearchError] =  useState(false)
    useEffect(()=>onClickSearch(),[authToken])
    useEffect(()=>{setSearchError(false)},[])
    const onClickSearch=()=>{
        if(searchRef.current && searchRef.current.value){   
            const searchText = searchRef.current.value
            dispatchSearch(searchText,authToken,setAuthToken,setAuthError,setSearchError,setSearchList)
            searchRef.current.value =''
        }

   }
   const inpWrap={
            flexDirection:{base:'column',sm:'row'},
            // gap:{base:'2vh',sm:'2vw'}, 
            h:'inherit',
            w:{base:'100%',sm:'90%'}, 
            m:'1vh auto 5vh auto', 
            justifyContent:'space-evenly' ,
            alignItems:'center'
        }
    return (
        !searchError?
        <Center minH={{base:'100vh',md:'70vh'}} m='4% 2%' h='auto' w='100%' flexDirection='column' justifyContent='start'>
        <Flex sx={inpWrap}>
            <SearchBar searchRef={searchRef}/>
            <Button sx={searchButtonStyle} onClick={onClickSearch}>
            
            <ColoredText message='Search' fontSize={{base:'1rem',md:'1.3rem'}} />
            </Button>
         
        </Flex>
        {searchList.length?
        <SearchResuts searchList={searchList}/>:
       ''
        }
        </Center>: 
        <Center>
        <ShowError
            heightVal={'30vh'}
            fontSize={'1.3rem'}
            iconSize={'35'}
        />
        </Center>
    )
}
export default SearchPage