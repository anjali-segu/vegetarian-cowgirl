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
  image:string,
  title: string,
  description:string,
  link: string,

}



const HeaderImage = (props:Props) => {
const {image, title, description, link} = props
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
            <img style={{maxHeight: theme.spacing(100), marginTop: theme.spacing(2)}}src="cookie.jpg" alt="Paris"/>
          </Grid>

          <Grid item xs={6} sx={{paddingTop:theme.spacing(25), paddingRight:theme.spacing(8)}}>
          <Typography sx={{
              fontFamily: 'Jost',
              fontWeight: 300 ,}}
              gutterBottom
              variant="body1"
              component="div">
            Featured Post
          </Typography>
          <Typography sx={{
              fontFamily: 'Jost',
              fontWeight: 500 ,
              color: 'black'}}
              gutterBottom
              variant="h4"
              component="div">
            {title}
          </Typography>
          <Typography sx={{
              fontFamily: 'Jost',
              fontWeight: 500 ,
              color: 'black'
              }}
              gutterBottom
              variant="h6"
              component="div">
            {description}
          </Typography>
          <Button href={link} sx={{
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
                Read Post
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



export default HeaderImage
