import Header from '../../atom/Header'
import AustinBlogGrid from '../../molecule/AustinBlogGrid'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import HeaderImage from '../../atom/HeaderImage'
import { Grid } from '@mui/material';

interface Props {
}


const Austin = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

       <Grid container justifyContent='center' sx={{marginTop:theme.spacing(2)}}>
         <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(13)}}src="icons/travel_icon.png" alt="travel"/>
         </Grid>
       </Grid>
      <Header  text={"Austin"} margin={1}/>
      <AustinBlogGrid/>




    </ThemeProvider>

  )
}

export default Austin
