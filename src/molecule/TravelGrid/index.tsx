import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CityCard from '../../atom/CityCard'



interface Props {
}


const TravelGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container sx={{paddingTop: theme.spacing(15),paddingBottom: theme.spacing(15), paddingLeft:theme.spacing(30),paddingRight:theme.spacing(30),}}>

      <Grid item xs={2} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/costa-rica-city-guide"} image={"City.png"} city={"COSTA RICA"}/>
      </Grid>

      <Grid item xs={2} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/austin-city-guide"} image={"Austin.png"} city={"AUSTIN"}/>
      </Grid>

      <Grid item xs={2} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/hawaii-city-guide"} image={"City.png"} city={"HAWAII"}/>
      </Grid>

      <Grid item xs={2} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/indianapolis-city-guide"} image={"City.png"} city={"INDIANAPOLIS"}/>
      </Grid>

      <Grid item xs={2} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/rome-city-guide"} image={"City.png"} city={"ROME"}/>
      </Grid>

      <Grid item xs={2} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/paris-city-guide"} image={"City.png"} city={"PARIS"}/>
      </Grid>



    </Grid>

    </ThemeProvider>
  )
}

export default TravelGrid
