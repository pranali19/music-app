import { Text,Flex } from "@chakra-ui/react"
import { mainMenuStyle,Linkstyle,themeColor } from "./common.styled"
import {Link ,Outlet} from 'react-router-dom'
import MenuLinks from './utils/menuLinks'
import { useEffect, useState } from "react"
import {BiMenu} from 'react-icons/bi'
import { useContext } from "react"
import { PlaylistContext } from "./musicAppMain"


const LoadMenuLinks=({setMenuIsVisible})=>{
    return(
        <>
        {MenuLinks.map((i)=>
        <Linkstyle key={i.name} exact='true' onClick={()=>setMenuIsVisible(false)} to={i.link}>{i.name}</Linkstyle>
        )}

        </>
    )
}
const ShowMenu =({currentPlaylist,displayVal,setMenuIsVisible})=>{
    return(
        <Flex display={displayVal} p='1.5vh 0vh' direction={'column'} gap='1.5vh' bg='inherit'>
        <LoadMenuLinks setMenuIsVisible={setMenuIsVisible}/>
        <Outlet/>
    </Flex>
    )
}
const MainMenu =({})=>{
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    const {currentPlaylist} = useContext(PlaylistContext)

    return (
        <Flex sx={mainMenuStyle}>
        <Flex display={{base:'flex',md:'none'}} p='1vh' alignSelf={'flex-end'}>
            <BiMenu 
                size='35' 
                color='black'
                onClick={()=>setMenuIsVisible(state=>!state)}
                />
        </Flex>
            {menuIsVisible?
            <ShowMenu displayVal={{base:'flex',md:'none'}} setMenuIsVisible={setMenuIsVisible} currentPlaylist={currentPlaylist} />
            :''
            }
            <ShowMenu displayVal={{base:'none',md:'flex'}} setMenuIsVisible={()=>{}} currentPlaylist={currentPlaylist} />

        </Flex>
    )
}
export default MainMenu