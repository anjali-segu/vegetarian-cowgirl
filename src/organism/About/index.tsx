import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import { Grid } from '@mui/material';
import Header from '../../atom/Header'
import Typography from '@mui/material/Typography';
import Media from 'react-media';

import About_Image from '../../assets/images/about/rainbow.jpg';

interface Props {
}


const About = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
    <Grid container>
    <Media query="(max-width: 800px)" render={() =>
      (
      <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
        <img style={{maxHeight: theme.spacing(100), marginTop: theme.spacing(2)}}src={About_Image} alt="Paris"/>
      </Grid>

      )}
    />
    <Media query="(min-width: 799px)" render={() =>
      (
        <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(150), marginTop: theme.spacing(2)}}src={About_Image} alt="Paris"/>
        </Grid>
      )}
    />

    </Grid>
    <Header text={"Meet Anjali"}/>
    <Grid container sx={{marginTop:theme.spacing(8)}}>
      <Grid item xs={2} md={3} sx={{justifyContent:'center'}}>
      </Grid>
      <Grid item xs={8} md={6} sx={{justifyContent:'center'}}>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 400 ,}}
            gutterBottom
            variant="h6"
            component="div">
            Jane Ko (commonly known as Koko) is the Austin food blogger behind A Taste of Koko®,
            Austin’s top food and travel blog, and has been blogging since 2010. A Taste of Koko
            features the hottest restaurants and weekend getaways and is the official restaurant
            expert for Visit Austin TX.
        </Typography>
      </Grid>
      <Grid item xs={2} md={3} sx={{justifyContent:'center'}}>
      </Grid>
    </Grid>

    <Grid container sx={{marginTop:theme.spacing(8)}}>
      <Grid item xs={2} md={3} sx={{justifyContent:'center'}}>
      </Grid>
      <Grid item xs={8} md={6} sx={{justifyContent:'center'}}>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 400 ,}}
            gutterBottom
            variant="h6"
            component="div">
            A Taste of Koko has been voted best local blogger in Austin by the Austin Chronicle two
            years in a row (2018 and 2019). Koko published her first book, Koko’s Guide To Austin,
             a pocket-sized guidebook on Austin Texas that is sold in 40+ locations in Austin and
            has reached #1 best seller in Texas books on Amazon.com! Jane has been a speaker at
            South by Southwest (SXSW), Texas Conference for Women, BlogHer, BlogHer Food, The
            Hustle 2X, University of Texas Austin, Google, and Whole Foods Global on entrepreneurship
             and social media. She also hosted the largest food crawl in Austin during SXSW 2014 with
             over 20,000 participants.
        </Typography>
      </Grid>
      <Grid item xs={2} md={3} sx={{justifyContent:'center'}}>
      </Grid>
    </Grid>

    <Header text={"About the Blog"}/>
    <Grid container sx={{marginTop:theme.spacing(8)}}>
      <Grid item xs={2} md={3} sx={{justifyContent:'center'}}>
      </Grid>
      <Grid item xs={8} md={6} sx={{justifyContent:'center'}}>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 400 ,}}
            gutterBottom
            variant="h6"
            component="div">
            Launched in 2010, A Taste of Koko has been featured in O Magazine, InStyle Magazine,
             OWN TV Network, Austin American-Statesman, Austin Monthly, Austin Woman Magazine,
              KXAN, Travel Channel, The Everygirl, and more.
        </Typography>
      </Grid>
      <Grid item xs={2} md={3} sx={{justifyContent:'center'}}>
      </Grid>
    </Grid>

    <Grid container sx={{marginTop:theme.spacing(8)}}>
      <Grid item xs={2} md={3} sx={{justifyContent:'center'}}>
      </Grid>
      <Grid item xs={8} md={6} sx={{justifyContent:'center'}}>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 400 ,}}
            gutterBottom
            variant="h6"
            component="div">
            A Taste of Koko has partnered with IKEA, Target, Uber, KitchenAid, AT&T, Carnival
             Cruise Line, Booking.com, PayPal, Lenovo, and more. See the full list of brand
             partnerships on the contact page. Collaborations include restaurant coverage,
             easy recipes, DIY projects for the home and how-tos, easy home entertaining,
            weekend getaways, and travel.
        </Typography>
      </Grid>
      <Grid item xs={2} md={3} sx={{justifyContent:'center'}}>
      </Grid>
    </Grid>

    <Grid container justifyContent="center" sx={{marginTop:theme.spacing(15)}}>
    <Typography sx={{
        fontFamily: 'Jost',
        fontWeight: 500 ,
        color: 'black'}}
        gutterBottom
        variant="h4"
        component="div">
        Follow On Instagram
    </Typography>
    </Grid>

    <Grid container justifyContent="center"  sx={{ marginBottom:theme.spacing(15)}}>
    <Typography sx={{
        fontFamily: 'Jost',
        fontWeight: 500 ,
        color: '#f09b85'}}
        gutterBottom
        variant="h4"
        component="div">
        @thevegetariancowgirl
    </Typography>
    </Grid>




    </ThemeProvider>

  )
}

export default About
