import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import { Grid } from '@mui/material';
import Media from 'react-media';

import BioProfile from '../../assets/images/about/BioProfile.jpg';

interface Props {

}



const BioCard = (props:Props) => {

  return (
    <ThemeProvider theme = {theme}>
    <Grid container sx={{marginBottom: theme.spacing(10)}}>

      <Grid item xs={2} sx={{display:'flex',justifyContent:'center'}}>
      </Grid>

      <Grid item xs={8} sx={{display:'flex',justifyContent:'center'}}>
      <Card sx={{
        [theme.breakpoints.up('xs')]:{
          minWidth: theme.spacing(80),
          minHeight: theme.spacing(80),
        },
        [theme.breakpoints.up('sm')]:{
          minWidth: theme.spacing(100),
          minHeight: theme.spacing(80),
        },
        [theme.breakpoints.up('md')]:{
          minWidth: theme.spacing(150),
          minHeight: theme.spacing(80),
        },
        [theme.breakpoints.up('lg')]:{
          minWidth: theme.spacing(280),
          minHeight: theme.spacing(80),
        },
        boxShadow: 0,
        backgroundColor: '#f4f2ed',
        border: 2,
        borderColor: 'black',
        borderRadius: 0}}>
        <CardContent>
        <Grid container>

        <Media query="(min-width: 450px)" render={() =>
          (
            <Grid item sm={12} md={12} lg={6} sx={{display:'flex',justifyContent:'center'}}>
              <img style={{maxHeight: theme.spacing(100), marginTop: theme.spacing(2)}}src={BioProfile} alt="Anjali by the Trevi Fountain."/>
            </Grid>

          )}
        />
        



          <Grid item sm={12} md={12} lg={6} sx={{
            [theme.breakpoints.up('sm')]:{
              paddingTop:theme.spacing(25),
              paddingRight:theme.spacing(2),
              paddingLeft:theme.spacing(2),
            },
            [theme.breakpoints.up('lg')]:{
              paddingTop:theme.spacing(25),
              paddingRight:theme.spacing(8)
            },

          }}>
          <Typography sx={{
            [theme.breakpoints.down('sm')]:{
              textAlign:'center',
            },
            [theme.breakpoints.between('sm','xl')]:{
              textAlign:'left',
            },
              fontFamily: 'Jost',
              fontWeight: 500 ,}}
              gutterBottom
              variant="h4"
              component="div">
            Welcome to the Vegetarian Cowgirl
          </Typography>
          <Typography sx={{
              fontFamily: 'Jost',
              fontWeight: 500 ,
              }}
              gutterBottom
              variant="h6"
              component="div">
            Anjali is the blogger behind A Vegetarian Cowgirl,
            Austin's top vegetarian food guide. Anjali hopes to
            inspire you taste buds by guiding you through plant
            based spots in cities. Check out her recipes, travel
            guides and her art.
          </Typography>
          <Button href="/about" sx={{
                marginTop:theme.spacing(2),
                backgroundColor: "#f09b85",
                borderRadius: 0,
                "&:hover": {
                  backgroundColor: "#ffffff",
                  color: "#f09b85",

                },
                }}
                variant="contained"
                disableElevation size="medium">
                About
            </Button>

          </Grid>
          </Grid>
        </CardContent>
      </Card>
      </Grid>

      <Grid item xs={2} sx={{display:'flex',justifyContent:'center'}}>
      </Grid>
    </Grid>

    </ThemeProvider>
  )
}



export default BioCard
