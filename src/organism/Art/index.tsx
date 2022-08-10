import ArtNav from '../../atom/ArtNav'
import ArtGallery from '../../atom/ArtGallery'
import Header from '../../atom/Header'
import CreativeProcessBlogGrid from '../../molecule/CreativeProcessBlogGrid'
import ArtGalleryBlogGrid from '../../molecule/ArtGalleryBlogGrid'
import OtherArtBlogGrid from '../../molecule/OtherArtBlogGrid'
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import { Grid } from '@mui/material';


import Other_Icon from '../../assets/images/icons/other_icon.png';
import Art_Icon from '../../assets/images/icons/art_icon.png';
import Gears_Icon from '../../assets/images/icons/gears_icon.png'

interface Props {
}


const Art = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
      <ArtNav/>
      <ArtGallery/>
       <Grid container justifyContent='center'>
         <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{ maxHeight: theme.spacing(13) }} src={Art_Icon} alt="Paint brush with palette, black and white."/>
         </Grid>
       </Grid>
      <Header id={"gallerydrops"} text={"Gallery Drops"} margin={1}/>
      <ArtGalleryBlogGrid/>

      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
         <img style={{maxHeight: theme.spacing(13)}}src={Gears_Icon} alt="White gears on black circular background."/>
        </Grid>
      </Grid>
      <Header id={"creativeprocess"}text={"My Creative Process"} margin={1}/>
      <CreativeProcessBlogGrid/>

      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
         <img style={{maxHeight: theme.spacing(13)}}src={Other_Icon} alt="Other icon"/>
        </Grid>
      </Grid>
      <Header id={"other"}text={"Other"} margin={1}/>
      <OtherArtBlogGrid/>

    </ThemeProvider>

  )
}

export default Art
