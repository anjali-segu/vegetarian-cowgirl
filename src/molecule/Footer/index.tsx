import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import {theme} from '../../utils/theme'
import { ThemeProvider } from '@mui/material/styles';
import SocialLink from '../../atom/SocialLink'
import CopyrightIcon from '@mui/icons-material/Copyright'

import LogoBlack from '../../assets/images/icons/logos/LogoBlack.png';

import Email from '../../assets/images/icons/email.png';
import Etsy from '../../assets/images/icons/etsy.png';
import Instagram from '../../assets/images/icons/instagram.png';
import Pinterest from '../../assets/images/icons/pinterest.png';

export default function BasicCard() {
  return (
    <ThemeProvider theme={theme}>
    <Card sx={{backgroundColor: '#f4f2ed'}}>
      <CardContent>
      <Grid container sx={{marginTop:theme.spacing(4), marginBottom:theme.spacing(4)}}>



        <Grid item xs={3} sm={3} md={3} sx={{borderRight:1}}>

          <Grid container justifyContent='center'>
            <img style={{maxHeight: theme.spacing(20), justifyContent:'center'}} src={LogoBlack} alt="Cowboy boot with monstera, white outlined in a black circle"/>
          </Grid>

          <Grid container justifyContent='center'>
            <Typography sx={{
              [theme.breakpoints.only('xs')]:{
                fontSize:theme.spacing(3),
              },
                fontFamily: 'Jost',
                fontWeight: 500 ,
                textAlign:'center',
                marginLeft:theme.spacing(30),
                marginRight:theme.spacing(30),
                marginTop: theme.spacing(2),
              }}
                gutterBottom
                variant="body2"
                component="div">
              AUSTIN'S TOP VEGETARIAN FOOD & TRAVEL BLOG
            </Typography>
          </Grid>

          <Grid container justifyContent="center" sx={{ paddingTop:theme.spacing(5)}}>

            <Grid item xs={6} sm={2} md={1}>
            <SocialLink
                content={
                  <img
                    style={{width:15}}
                    src={Instagram}
                    alt='Instagram'
                  />
                }
                url={'https://www.instagram.com/thevegetariancowgirl/'}
              />
            </Grid>

            <Grid item xs={6} sm={2} md={1}>
              <SocialLink
                  content={
                    <img
                      style={{width:14}}
                      src={Etsy}
                      alt='Etsy'
                    />
                  }
                  url={'https://www.etsy.com/shop/PrintsbyMinimalist'}
                />
              </Grid>

              <Grid item xs={6} sm={2} md={1}>
                <SocialLink
                    content={
                      <img
                        style={{width:14}}
                        src={Pinterest}
                        alt='Pinterest'
                      />
                    }
                    url={'https://www.pinterest.com/PrintsbyMinimalist/'}
                  />
                </Grid>

                <Grid item xs={6} sm={2} md={1}>
                  <SocialLink
                      content={
                        <img
                          style={{width:18}}
                          src={Email}
                          alt='Email'
                        />
                      }
                      url={'mailto:TODO'}
                    />
                </Grid>

          </Grid>

        </Grid>

        <Grid item xs={2} sx={{
          textAlign:'center',
          [theme.breakpoints.only('xs')]:{
            marginLeft:theme.spacing(2),
          },
        }}>
          <Link href="/#travel" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 800 ,}}
              gutterBottom
              variant="body1"
              component="div">
            TRAVEL
          </Typography>
          </Link>
           <Link href="/costa-rica" underline="none" color="black">
            <Typography sx={{
                fontFamily: 'Karla',
                fontWeight: 500 ,}}
                gutterBottom
                variant="body2"
                component="div"
                >
              Costa Rica
            </Typography>
          </Link>
          <Link href="/austin" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 500 ,}}
              gutterBottom
              variant="body2"
              component="div">
            Austin
          </Typography>
          </Link>
          <Link href="/hawaii" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 500 ,}}
              gutterBottom
              variant="body2"
              component="div">
            Hawaii
          </Typography>
          </Link>
          <Link href="/indianapolis" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 500 ,}}
              gutterBottom
              variant="body2"
              component="div">
            Indianapolis
          </Typography>
          </Link>
          <Link href="/rome" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 500 ,}}
              gutterBottom
              variant="body2"
              component="div">
            Rome
          </Typography>
          </Link>
          <Link href="/paris" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 500 ,}}
              gutterBottom
              variant="body2"
              component="div">
              Paris
          </Typography>
          </Link>
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 800 ,
              paddingTop: theme.spacing(5),
              }}
              gutterBottom
              variant="body2"
              component="div">
            <CopyrightIcon fontSize='small' sx={{maxHeight:theme.spacing(3)}}/>  A VEGETARIAN COWGIRL
          </Typography>

        </Grid>

        <Grid item xs={2} sx={{
          textAlign:'center',
          [theme.breakpoints.only('xs')]:{
            marginLeft:theme.spacing(2),
          },
        }}>
          <Link href="/recipes" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 800 ,}}
              gutterBottom
              variant="body1"
              component="div">
            RECIPES
          </Typography>
          </Link>

          <Link href="/recipes#baking" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 500 ,}}
              gutterBottom
              variant="body2"
              component="div">
              Baking
          </Typography>
          </Link>
          <Link href="/recipes#cooking" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 500 ,}}
              gutterBottom
              variant="body2"
              component="div">
              Cooking
          </Typography>
          </Link>

          <Link href="/recipes#drinks" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 500 ,}}
              gutterBottom
              variant="body2"
              component="div">
              Drinks
          </Typography>
          </Link>
        </Grid>
       

        <Grid item xs={2} sx={{
          textAlign:'center',
          [theme.breakpoints.only('xs')]:{
            marginLeft:theme.spacing(2),
          },
        }}>
          <Link href="/austin-living" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 800 ,}}
              gutterBottom
              variant="body1"
              component="div">
            AUSTIN LIVING
          </Typography>
          </Link>
          <Link href="/austin-living#austinactivites" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 500 ,}}
              gutterBottom
              variant="body2"
              component="div">
              Austin Activities
          </Typography>
          </Link>
          <Link href="/austin-living#restaurants" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 500 ,}}
              gutterBottom
              variant="body2"
              component="div">
              Restaurants
          </Typography>
          </Link>
          <Link href="/austin-living#other" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 500 ,}}
              gutterBottom
              variant="body2"
              component="div">
              Other
          </Typography>
          </Link>

        </Grid>

        <Grid item xs={2} sx={{
          textAlign:'center',
          [theme.breakpoints.only('xs')]:{
            marginLeft:theme.spacing(1),
          },
        }}>
          <Link href="/about" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 800 ,}}
              gutterBottom
              variant="body1"
              component="div">
            About
          </Typography>
          </Link>

          <Link href="/about" underline="none" color="black">
          <Typography sx={{
              fontFamily: 'Karla',
              fontWeight: 500 ,}}
              gutterBottom
              variant="body2"
              component="div">
              My Story
          </Typography>
          </Link>

        </Grid>

      </Grid>


      </CardContent>
    </Card>
    </ThemeProvider>
  );
}
