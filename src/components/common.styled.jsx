import styled from "@emotion/styled"
import {Link} from 'react-router-dom'

export const themeColor ='#e35e29'
export const MusicAppMainStyle = styled.div`
        display:grid;
        height:fit-content;
        min-height:100vh; 
        width:100%;
        background-color:#fff3bc;
        grid-template-columns:18% 82%;
    @media(max-width:48em){
        ${'' /* grid-template-columns:100%;
        grid-template-rows:28vh auto;
        height:auto; */}
        display:flex;
        flex-direction:column;
        position:relative;

    }
     `
export const mainMenuStyle= {
    height:{ md:'100%'},
    w:{base:'100%',md:'inherit'},
    backgroundColor:'inherit',
    gap:'2%',
    flexDirection:'column',
    alignContent:'center',
    // borderRight:'solid '+themeColor+' 2px',
    

}
export const bannerImg={
   height:'40vh',
   width:'100%',
   backgroundColor:'blue',
   blur:'30%',
   filter:'blur(8px)',
   backgroundSize:'cover',
   backdropBrightness:'-3',
}
export const smallImgStyle = {
    position:'relative',
    top:'-55px',
    boxShadow:'white 1px 1px 14px 1px',
    left:'5%',
    height:'30vh',
    width:'30vh',
    rounded:'lg',



}
export const showAllBtnStyle = {
    m:'3px' ,
    p:{base:'3px 3px',sm:'4px 5px' },
    border:'solid white 1.5px',
    rounded:'3px' ,
    color:'white' ,
    fontSize:{base:'0.8rem',sm:'1rem'},
    bg:'linear-gradient(185deg, black, #121111)',
}
export const searchButtonStyle={
    bg:'#2acc2b', 
    color:'white', 
    h:'auto', 
    m:{base:'3% auto',sm:'auto'},
    p:{base:'1.2% 2%',sm:'1% 2.5%'}, 
    rounded:{base:'0px',sm:'10px'}, 
    w:{base:'80%',sm:'auto'},

}
export const CardWrapper=styled.div`
height:220px;
width:220px;
@media(max-width:765px){
${'' /* height:180px;
width:180px;    */}
}
@media(max-width:500px){
${'' /* height:0px; */}
${'' /* width:150px;    */}
}
`
export const Linkstyle=styled(Link)`
appearance:none;
text-decoration:none;
font-weight:400;
color:#e35e29;
font-streach:expanded;

`
export const PlayerMainWrapper=styled.div`
    margin:0.5%; 
    padding:1%; 
    height:98vh;
    display: flex;
    flex-direction:column;
    width:70%; 
    border-radius:xl;
    justifyContent:center;
    background:linear-gradient(180deg,#001e1b,black);
@media(max-width:600px){
width:100%;
height:88vh;
}
`
export const QueueWrapper=styled.div`
    display:flex;
    flex-direction:column;
    height:auto;
    width:29%;
    @media(max-width:600px){
        display:none;
    }

`
export const musicPlayerStyle = {
    h: '10vh', w: '100%',
    pos: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',

}  
export const textQueueStyle={
    height: "1.2rem",
    overflow: "hidden",
    lineHeight: "20px",
    width: "100%",
    wordBreak: "break-all",
    color:'white',
     fontWeight:'400',
     m:'0'
}
export const QueueMbWrap = styled.div`
    display:none;
    flex-direction:row;
    height:10% ;
    width:100% ;
    background-color:rgb(255 255 255 / 57%);
    position:fixed;
    bottom:0%;
@media(max-width:600px){
    display:flex
}
`