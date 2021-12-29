import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import {theme} from '../../utils/theme'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import SocialLink from '../../atom/SocialLink'
import Icon from '@mui/material/Icon';
import CopyrightIcon from '@mui/icons-material/Copyright'



export default function BasicCard() {
  return (
    <ThemeProvider theme={theme}>
    <Card sx={{backgroundColor: '#f4f2ed'}}>
      <CardContent>
      <Grid container sx={{marginTop:theme.spacing(4), marginBottom:theme.spacing(4)}}>



        <Grid item xs={3} sx={{borderRight:1}}>
        <img style={{maxHeight: theme.spacing(20), paddingLeft:theme.spacing(34)}} src="LogoBlack.png" alt="Cowboy boot with monstera, white outlined in a black circle"/>

        <Typography sx={{
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

        <Grid container justifyContent="center" sx={{ paddingTop:theme.spacing(5)}}>
          <Grid item xs={1}>
          <SocialLink
              content={
                <img
                  style={{width:15}}
                  src={`${process.env.PUBLIC_URL}/instagram.png`}
                />
              }
              url={'https://www.instagram.com/thevegetariancowgirl/'}
            />
            </Grid>

          <Grid item xs={1}>
            <SocialLink
                content={
                  <img
                    style={{width:14}}
                    src={`${process.env.PUBLIC_URL}/etsy.png`}
                  />
                }
                url={'https://www.etsy.com/shop/PrintsbyMinimalist'}
              />
            </Grid>

            <Grid item xs={1}>
              <SocialLink
                  content={
                    <img
                      style={{width:14}}
                      src={`${process.env.PUBLIC_URL}/pinterest.png`}
                    />
                  }
                  url={'https://www.pinterest.com/PrintsbyMinimalist/'}
                />
              </Grid>

              <Grid item xs={1}>
                <SocialLink
                    content={
                      <img
                        style={{width:18}}
                        src={`${process.env.PUBLIC_URL}/email.png`}
                      />
                    }
                    url={'https://www.pinterest.com/PrintsbyMinimalist/'}
                  />
          </Grid>

        </Grid>

        </Grid>

        <Grid item xs={2} sx={{textAlign:'center'}}>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 800 ,}}
            gutterBottom
            variant="body1"
            component="div">
          TRAVEL
        </Typography>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 500 ,}}
            gutterBottom
            variant="body2"
            component="div">
          Costa Rica
        </Typography>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 500 ,}}
            gutterBottom
            variant="body2"
            component="div">
          Austin
        </Typography>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 500 ,}}
            gutterBottom
            variant="body2"
            component="div">
          Hawaii
        </Typography>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 500 ,}}
            gutterBottom
            variant="body2"
            component="div">
          Indianapolis
        </Typography>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 500 ,}}
            gutterBottom
            variant="body2"
            component="div">
          Rome
        </Typography>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 500 ,}}
            gutterBottom
            variant="body2"
            component="div">
            Paris
        </Typography>

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

        <Grid item xs={2} sx={{textAlign:'center'}}>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 800 ,}}
            gutterBottom
            variant="body1"
            component="div">
          RECIPES
        </Typography>

        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 500 ,}}
            gutterBottom
            variant="body2"
            component="div">
            Baking
        </Typography>

        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 500 ,}}
            gutterBottom
            variant="body2"
            component="div">
            Cooking
        </Typography>

        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 500 ,}}
            gutterBottom
            variant="body2"
            component="div">
            Drinks
        </Typography>
        </Grid>

        <Grid item xs={2} sx={{textAlign:'center'}}>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 800 ,}}
            gutterBottom
            variant="body1"
            component="div">
          AUSTIN LIVING
        </Typography>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 500 ,}}
            gutterBottom
            variant="body2"
            component="div">
            Day Adventures
        </Typography>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 500 ,}}
            gutterBottom
            variant="body2"
            component="div">
            Restaurants
        </Typography>

        </Grid>

        <Grid item xs={2} sx={{textAlign:'center'}}>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 800 ,}}
            gutterBottom
            variant="body1"
            component="div">
          About
        </Typography>

        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 500 ,}}
            gutterBottom
            variant="body2"
            component="div">
            My Story
        </Typography>

        </Grid>

      </Grid>


      </CardContent>
    </Card>
    </ThemeProvider>
  );
}
