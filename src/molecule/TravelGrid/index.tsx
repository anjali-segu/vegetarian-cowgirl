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

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/costa-rica-city-guide"} image={"/travel/costa_rica.png"} city={"COSTA RICA"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/austin-city-guide"} image={"/travel/austin.png"} city={"AUSTIN"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/hawaii-city-guide"} image={"/travel/hawaii.jpeg"} city={"HAWAII"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/indianapolis-city-guide"} image={"/travel/indianapolis.jpg"} city={"INDIANAPOLIS"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/rome-city-guide"} image={"/travel/rome.jpeg"} city={"ROME"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/paris-city-guide"} image={"/travel/paris.jpeg"} city={"PARIS"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/new-york-city-guide"} image={"/travel/new_york.jpeg"} city={"NEW YORK"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/london-city-guide"} image={"/travel/london.jpeg"} city={"LONDON"}/>
      </Grid>



    </Grid>

    </ThemeProvider>
  )
}

export default TravelGrid
