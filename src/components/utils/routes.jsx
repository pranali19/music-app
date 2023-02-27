// import PlayPage from '../pages/playPage';
import NoPage from '../pages/noPage'
import SearchPage from '../pages/searchPage'
import AboutPage from '../pages/aboutPage'
import HistoryPage from '../pages/historyPage'
import PlaylistCard from '../pages/PlaylistCardPage';
import PlayerPage from '../pages/playerPage';
import HomePage from '../pages/homePage';
import ShowPlaylist from '../pages/showPlaylistPage';
import { Flex } from '@chakra-ui/react';
import {Routes,Route} from 'react-router-dom'
import Login from '../../auth/login';
import { PlaylistContext } from '../musicAppMain';
import { useContext } from 'react';
import QueuePage from '../pages/queuePage'
const SwitchPage=({})=>{
  
    return( 
    <Flex h='auto' w='100%' bg='black' rounded={{sm:'20px 20px 0px 0px',md:'20px 0 0 20px'}}>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='search' element={<SearchPage />}/>
       
            <Route path='player' element={<PlayerPage />}/>:
 
          <Route path='show-play-list' element={<ShowPlaylist />}/>
          <Route path='login' element={<Login />}/>
          <Route path='history' element={<HistoryPage />}/>
          <Route path='about' element={<AboutPage />}/>
          <Route path='playlist-show-all' element={<PlaylistCard />}/>
          <Route path='queue' element={<QueuePage />}/>
          
          <Route path='*' element={<NoPage/>}/>

      </Routes>
    </Flex>

    )
}

export default SwitchPage