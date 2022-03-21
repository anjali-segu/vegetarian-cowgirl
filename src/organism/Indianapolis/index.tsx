import Header from '../../atom/Header'
import IndianapolisBlogGrid from '../../molecule/IndianapolisBlogGrid'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import { Grid } from '@mui/material';

interface Props {
}


const Indianapolis = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

       <Grid container justifyContent='center' sx={{marginTop:theme.spacing(2)}}>
         <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(13)}}src="icons/travel_icon.png" alt="travel"/>
         </Grid>
       </Grid>
      <Header text={"Indianapolis"} margin={1}/>
      <IndianapolisBlogGrid/>


    </ThemeProvider>

  )
}

export default Indianapolis
