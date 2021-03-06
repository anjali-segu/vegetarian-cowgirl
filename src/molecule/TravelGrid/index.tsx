import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import { Grid } from '@mui/material';
import CityCard from '../../atom/CityCard'

import Austin from '../../assets/images/icons/travel/austin.png';
import Costa_Rica from '../../assets/images/icons/travel/costa_rica.png';
import Hawaii from '../../assets/images/icons/travel/hawaii.jpeg';
import Indianapolis from '../../assets/images/icons/travel/indianapolis.jpg';
import London from '../../assets/images/icons/travel/london.jpeg';
import New_York from '../../assets/images/icons/travel/new_york.jpeg';
import Paris from '../../assets/images/icons/travel/paris.jpeg';
import Rome from '../../assets/images/icons/travel/rome.jpeg';

interface Props {
}


const TravelGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container sx={{paddingTop: theme.spacing(15),paddingBottom: theme.spacing(15), paddingLeft:theme.spacing(30),paddingRight:theme.spacing(30),}}>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/costa-rica-city-guide"} image={Costa_Rica} city={"COSTA RICA"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/austin-city-guide"} image={Austin} city={"AUSTIN"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/hawaii-city-guide"} image={Hawaii} city={"HAWAII"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/indianapolis-city-guide"} image={Indianapolis} city={"INDIANAPOLIS"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/under-construction"} image={Rome} city={"ROME"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/under-construction"} image={Paris} city={"PARIS"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/under-construction"} image={New_York} city={"NEW YORK"}/>
      </Grid>

      <Grid item xs={12} sm={6} md={3} sx={{display: 'inline',justifyContent:'center', }}>
        <CityCard link={"/under-construction"} image={London} city={"LONDON"}/>
      </Grid>



    </Grid>

    </ThemeProvider>
  )
}

export default TravelGrid
