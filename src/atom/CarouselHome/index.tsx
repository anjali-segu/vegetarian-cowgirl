import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import {theme} from '../../utils/theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Media from 'react-media';


import { Grid } from '@mui/material';
import {
    Paper,
    Button,
    Typography,
} from '@mui/material'






const CarouselHome = () => {

    return (
        <div>
          <Media query="(min-width: 1389px)" render={() =>
            (
              <div style={{minHeight:theme.spacing(100)}}>

                  <br/>
                  <Carousel
                      interval= {15000}
                      className="SecondExample"
                  >
                      {
                          items.map((item, index) => {
                              return <Project item={item} key={index} />
                          })
                      }
                  </Carousel>
                  <br/>
              </div>
            )}
          />
          <Media query="(min-width:599px) and (max-width: 1390px)" render={() =>
            (
              <Grid container justifyContent='center'>
                <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
                 <img style={{maxHeight: theme.spacing(20)}}src="LogoBlack.png" alt="Paris"/>
                </Grid>
              </Grid>
            )}
          />

        </div>
    )
}


type Item = {
    name: string,
    description: string,
    href: string,
    src: string,
}

interface ProjectProps
{
    item: Item
}

function Project({item}: ProjectProps) {
    return (
      <ThemeProvider theme = {theme}>
        <Paper
            elevation={0}
            square={true}
            sx={{backgroundColor:'#f4f2ed',
            minHeight: theme.spacing(120),
            marginLeft:theme.spacing(40),
            marginRight:theme.spacing(40),
            }}
        >
        <Grid container sx={{marginBottom: theme.spacing(10)}}>

        <Grid item xs={8} sx={{}}>
          <img style={{maxHeight: theme.spacing(120),}}src={item.src} alt="Paris"/>
        </Grid>

        <Grid item xs={4} sx={{marginTop:theme.spacing(33),paddingLeft:theme.spacing(20), paddingRight:theme.spacing(5)}}>


          <Typography
            variant='h4'
            sx={{
                fontFamily: 'Jost',
                fontWeight: 600 ,
                color: 'black'}}
          >{item.name}</Typography>



          <Typography
            variant='body1'
            sx={{
                marginTop:theme.spacing(3),
                fontFamily: 'Karla',
                fontWeight: 500 ,
                color: 'black'}}
          >{item.description}</Typography>

          <Button href={item.href} sx={{
                marginTop:theme.spacing(5),
                backgroundColor: "#f09b85",
                borderRadius: 0,
                "&:hover": {
                  backgroundColor: "#ffffff",
                  color: "#f09b85",

                },
                }}
                variant="contained"
                disableElevation size="medium">
                Read Post
            </Button>

        </Grid>

        </Grid>


        </Paper>
        </ThemeProvider>


    )
}

const items: Item[] = [
    {
        name: "Arenal Volcano",
        description: "A day trip to the Arenal Volcano and Baldi Hot Springs in Costa Rica.",
        href: '/',
        src: 'arenal_volcano.jpg'
    },
    {
        name: "Vegetarian Thanksgiving",
        description: "10 vegetarian thanksgiving ideas. Pictured is jalepeno cheddar cornbread and stuffed garlic mushrooms. ",
        href: '/',
        src: 'thanksgiving.jpg',
    },
    {
        name: "An Austin Afternoon",
        description: "An exciting austin afternoon idea. Swing by Manoli's Ice Cream and Cafe Monet for a fun Austin afternoon.",
        href: '/',
        src: 'austin_afternoon.jpg',
    },
    {
        name: "July 4th Photography",
        description: "Learn how to get this epic shot on a DSLR camera.",
        href: '/',
        src:'July_4th.jpg',
    }
]

export default CarouselHome;
