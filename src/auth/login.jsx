import { Button, Center, Flex, Text } from "@chakra-ui/react"
import { useContext,useEffect, useState } from "react"
import { redirect } from "react-router-dom"
import { LoginContext, TokenContext } from "../components/musicAppMain"
import { loginEndPoint } from "./spotifyApi"

function Login(){
    const {isLoggedIn,setIsLoggedIn} =useContext(LoginContext) 
    const {authToken,setAuthToken} =useContext(TokenContext)
    
    const [message,setMessage] = useState(' ')
    useEffect(()=>{
        const auth =window.location.hash;
        if(auth){
            const token = auth.split('&')[0].split('=')[1]
            window.localStorage.setItem('token',token)
            setAuthToken(token)
            setIsLoggedIn(true)
            setMessage('Login Successfull !')
        }else if(window.location.search){
            setMessage(window.location.search.substring(1).split('=').join(' '))
        }

    },[])
    return (
        <Flex h='100vh' w='100%'>

    <Flex h='auto' gap='10vh' p='2%' w='100%' direction={'column'} > 
    <Text as='h3' color='white' fontSize='1.8rem'>Log in to your spotify account</Text>
        
        <Text color='white' as='p' fontSize={'1.5rem'}> {message} </Text>
        
        {!isLoggedIn?
        <Button variant='solid' m='2% auto' bgColor={'white'}>
        <a href={loginEndPoint}>login</a>
        </Button>:
        ''}
        </Flex>
        
        </Flex>

    )
}
export default Login