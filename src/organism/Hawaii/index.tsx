import Header from '../../atom/Header'
import HawaiiMauiBlogGrid from '../../molecule/HawaiiMauiBlogGrid'
import HawaiiBigIslandBlogGrid from '../../molecule/HawaiiBigIslandBlogGrid'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import HeaderImage from '../../atom/HeaderImage'
import { Grid } from '@mui/material';

import Travel_Icon from '../../assets/images/icons/travel_icon.png';

interface Props {
}


const Hawaii = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

       <Grid container justifyContent='center' sx={{marginTop:theme.spacing(2)}}>
         <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(13)}}src={Travel_Icon} alt="travel"/>
         </Grid>
       </Grid>
      <Header text={"Hawaii - The Big Island"} margin={1}/>
      <HawaiiBigIslandBlogGrid/>

      <Header text={"Hawaii - Maui"} margin={1}/>
      <HawaiiMauiBlogGrid/>




    </ThemeProvider>

  )
}

export default Hawaii
