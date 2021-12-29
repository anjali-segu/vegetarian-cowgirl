import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import { Grid } from '@mui/material';


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
        minWidth: theme.spacing(280),
        minHeight: theme.spacing(80),
        boxShadow: 0,
        backgroundColor: '#f4f2ed',
        border: 2,
        borderColor: 'black',
        borderRadius: 0}}>
        <CardContent>
        <Grid container>

          <Grid item xs={6} sx={{display:'flex',justifyContent:'center'}}>
            <img style={{maxHeight: theme.spacing(100), marginTop: theme.spacing(2)}}src="BioProfile.jpg" alt="Paris"/>
          </Grid>

          <Grid item xs={6} sx={{paddingTop:theme.spacing(25), paddingRight:theme.spacing(8)}}>
          <Typography sx={{
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
