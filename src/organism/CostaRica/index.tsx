import Header from '../../atom/Header'
import CostaRicaBlogGrid from '../../molecule/CostaRicaBlogGrid'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import HeaderImage from '../../atom/HeaderImage'
import { Grid } from '@mui/material';

interface Props {
}


const CostaRica = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

       <Grid container justifyContent='center' sx={{marginTop:theme.spacing(2)}}>
         <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(13)}}src="icons/travel_icon.png" alt="Paris"/>
         </Grid>
       </Grid>
      <Header  text={"Costa Rica"} margin={1}/>
      <CostaRicaBlogGrid/>




    </ThemeProvider>

  )
}

export default CostaRica
