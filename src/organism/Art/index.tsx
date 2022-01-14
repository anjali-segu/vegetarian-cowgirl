import ArtNav from '../../atom/ArtNav'
import ArtGallery from '../../atom/ArtGallery'
import Header from '../../atom/Header'
import CreativeProcessBlogGrid from '../../molecule/CreativeProcessBlogGrid'
import ArtGalleryBlogGrid from '../../molecule/ArtGalleryBlogGrid'
import OtherArtBlogGrid from '../../molecule/OtherArtBlogGrid'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import HeaderImage from '../../atom/HeaderImage'
import { Grid } from '@mui/material';

interface Props {
}


const AustinLiving = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
      <ArtNav/>
      <ArtGallery/>
       <Grid container justifyContent='center'>
         <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(13)}}src="icons/restaurants_icon.png" alt="Paris"/>
         </Grid>
       </Grid>
      <Header id={"gallerydrops"} text={"Gallery Drops"} margin={1}/>
      <ArtGalleryBlogGrid/>

      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
         <img style={{maxHeight: theme.spacing(13)}}src="icons/activities_icon.png" alt="Paris"/>
        </Grid>
      </Grid>
      <Header id={"creativeprocess"}text={"My Creative Process"} margin={1}/>
      <CreativeProcessBlogGrid/>

      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
         <img style={{maxHeight: theme.spacing(13)}}src="icons/other_icon.png" alt="Paris"/>
        </Grid>
      </Grid>
      <Header id={"other2"}text={"Other"} margin={1}/>
      <OtherArtBlogGrid/>

    </ThemeProvider>

  )
}

export default AustinLiving
