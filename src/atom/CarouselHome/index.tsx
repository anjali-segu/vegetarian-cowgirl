import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { theme } from '../../utils/theme';
import { ThemeProvider } from '@mui/material/styles';


import { Grid, useMediaQuery } from '@mui/material';
import {
  Paper,
  Button,
  Typography,
} from '@mui/material'

import Arenal_Volcano from '../../assets/images/blog_posts/arenal_volcano.jpg';
import Austin_Afternoon from '../../assets/images/blog_posts/austin_afternoon.jpg';
import July_4th from '../../assets/images/blog_posts/july_4th.jpg';
import Thanksgiving from '../../assets/images/blog_posts/thanksgiving.jpg';

import LogoBlack from '../../assets/images/icons/logos/LogoBlack.png';




const CarouselHome = () => {
  const matchesWide = useMediaQuery('(min-width:1389px)');
  const matchesMedium = useMediaQuery('(min-width:599px) and (max-width: 1390px)');
  return (
    <div>
      {
        matchesWide && (
          <div style={{ minHeight: theme.spacing(100) }}>

            <br />
            <Carousel
              interval={15000}
              className="SecondExample"
            >
              {
                items.map((item, index) => {
                  return <Project item={item} key={index} />
                })
              }
            </Carousel>
            <br />
          </div>
        )
      }
      {
        matchesMedium && (
          <Grid container justifyContent='center'>
            <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ maxHeight: theme.spacing(20) }} src={LogoBlack} alt="White outlined cowboy boot with monstera plant." />
            </Grid>
          </Grid>
        )
      }

    </div>
  )
}


type Item = {
  name: string,
  description: string,
  href: string,
  src: string,
  alt: string,
}

interface ProjectProps {
  item: Item
}

function Project({ item }: ProjectProps) {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={0}
        square={true}
        sx={{
          backgroundColor: '#f4f2ed',
          minHeight: theme.spacing(120),
          marginLeft: theme.spacing(40),
          marginRight: theme.spacing(40),
        }}
      >
        <Grid container sx={{ marginBottom: theme.spacing(10) }}>

          <Grid item xs={8} sx={{}}>
            <img style={{ maxHeight: theme.spacing(120), }} src={item.src} alt={item.alt} />
          </Grid>

          <Grid item xs={4} sx={{ marginTop: theme.spacing(33), paddingLeft: theme.spacing(20), paddingRight: theme.spacing(5) }}>


            <Typography
              variant='h4'
              sx={{
                fontFamily: 'Jost',
                fontWeight: 600,
                color: 'black'
              }}
            >{item.name}</Typography>



            <Typography
              variant='body1'
              sx={{
                marginTop: theme.spacing(3),
                fontFamily: 'Karla',
                fontWeight: 500,
                color: 'black'
              }}
            >{item.description}</Typography>

            <Button href={item.href} sx={{
              marginTop: theme.spacing(5),
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
    href: '/costa-rica/arenal-volcano',
    src: Arenal_Volcano,
    alt: "Anjali standing in front of the Arenal volcano."
  },
  {
    name: "Vegetarian Thanksgiving",
    description: "10 vegetarian Thanksgiving recipes! Pictured is jalapeno cheddar cornbread and stuffed garlic mushrooms. ",
    href: '/recipes/vegetarian-thanksgiving',
    src: Thanksgiving,
    alt: "Stuffed mushrooms and cornbread on a wooden serving board."
  },
  {
    name: "An Austin Afternoon",
    description: "An exciting Austin afternoon idea. Swing by Manoli's Ice Cream and Cafe Monet for a fun Austin afternoon.",
    href: '/austin/afternoon',
    src: Austin_Afternoon,
    alt: "Holding two cups of ice cream in front a food truck."
  },
  {
    name: "July 4th Photography",
    description: "Learn how to get this epic shot on a DSLR camera.",
    href: '/art/photography',
    src: July_4th,
    alt: "Spelling the word Love with sparklers."
  }
]

export default CarouselHome;
