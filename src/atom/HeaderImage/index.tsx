import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import { Grid } from '@mui/material';
import Media from 'react-media';


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
    <Grid container justifyContent='center' sx={{marginBottom: theme.spacing(10)}}>

      <Grid item xs={2} sx={{display:'flex',justifyContent:'center'}}>
      </Grid>

      <Grid item xs={8} sx={{display:'flex',justifyContent:'center'}}>
      <Card sx={{
        [theme.breakpoints.between('xs', 'sm')]:{
          minWidth: theme.spacing(80),
          minHeight: theme.spacing(90),
        },
        [theme.breakpoints.between('sm', 'md')]:{
          minWidth: theme.spacing(150),
          minHeight: theme.spacing(90),
        },
        [theme.breakpoints.between('md', 'lg')]:{
          minWidth: theme.spacing(200),
          minHeight: theme.spacing(90),
        },
        minWidth: theme.spacing(280),
        minHeight: theme.spacing(80),
        boxShadow: 0,
        backgroundColor: '#f4f2ed',
        border: 2,
        borderColor: 'black',
        borderRadius: 0}}>
        <CardContent>
        <Grid container justifyContent='center'>

        <Media query="(min-width: 600px)" render={() =>
          (
            <Grid item sm={12} md={6} lg={6} sx={{display:'flex',justifyContent:'center'}}>
              <img style={{maxHeight: theme.spacing(100), marginTop: theme.spacing(2)}}src={image} alt="Paris"/>
            </Grid>
          )}
        />
        <Media query="(max-width: 599px)" render={() =>
          (
            <Grid item sm={12} md={6} lg={6} sx={{display:'flex',justifyContent:'center'}}>
              <img style={{maxHeight: theme.spacing(70), marginTop: theme.spacing(2)}}src={image} alt="Paris"/>
            </Grid>

          )}
        />



          <Grid item  md={12} lg={6} sx={{
            [theme.breakpoints.between('xs', 'sm')]:{
              paddingTop:theme.spacing(5),
              paddingRight:theme.spacing(0)
            },
            [theme.breakpoints.between('sm', 'md')]:{
              paddingTop:theme.spacing(10),
              paddingRight:theme.spacing(0)
            },
            [theme.breakpoints.between('md', 'lg')]:{
              paddingTop:theme.spacing(12),
              paddingRight:theme.spacing(0)
            },
            paddingTop:theme.spacing(25),
            paddingRight:theme.spacing(8)
          }}>
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
