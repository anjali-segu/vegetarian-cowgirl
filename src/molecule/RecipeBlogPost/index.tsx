import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Header from '../../atom/Header'
import HeaderImage from '../../atom/HeaderImage'
import Typography from '@mui/material/Typography';
import Media from 'react-media';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';

interface Props {
  image: string,
  icon: string,
  title: string,
  subtitle: string,
  ingredients: string[],
  steps: string[],
}


const FeaturedPosts = (props:Props) => {
const {image, icon, title, subtitle, ingredients, steps} = props
  return (
    <ThemeProvider theme={theme}>
    <Typography sx={{
        fontFamily: 'Jost',
        fontWeight: 500 ,
        textAlign: 'center',
        color: 'black',
        marginTop: theme.spacing(4)}}
        gutterBottom
        variant="h4"
        component="div">
      {title}
    </Typography>

    <Grid container justifyContent='center'>
      <Grid item xs={8} md={6}>
    <Typography sx={{
        fontFamily: 'Karla',
        fontWeight: 300 ,
        textAlign: 'center',
        color: 'black',
        fontStyle: 'italic',
        marginTop: theme.spacing(4)}}
        gutterBottom
        variant="body1"
        component="div">
      {subtitle}
    </Typography>
    </Grid>
    </Grid>

<Grid container justifyContent='center'>
    <Button href={"#recipe"} sx={{
          marginTop:theme.spacing(4),
          backgroundColor: "#f09b85",
          borderRadius: 0,
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#f09b85",

          },
          }}
          variant="contained"
          disableElevation size="medium">
          Jump to Recipe
      </Button>
  </Grid>

    <Grid container justifyContent='center' sx={{marginTop:theme.spacing(10)}}>
      <Grid item xs={8} sx={{display:'flex',justifyContent:'center'}}>
        <img style={{maxHeight: theme.spacing(150)}} src={image} alt="Paris"/>
      </Grid>
    </Grid>



<Grid container justifyContent='center' sx={{marginTop:theme.spacing(10)}}>
  <Card sx={{
    [theme.breakpoints.only('xs')]:{
      minWidth: theme.spacing(10),
    },
    marginLeft:theme.spacing(2),
    marginRight:theme.spacing(2),
    minWidth:theme.spacing(160),
    border: 2
  }}>
    <CardContent>
    <Grid container justifyContent='center'>
      <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
       <img style={{maxHeight: theme.spacing(13)}}src={icon} alt="Paris"/>
      </Grid>
    </Grid>
    <Grid item lg={12}>
      <Typography sx={{
          fontFamily: 'Jost',
          fontWeight: 600 ,
          textAlign: 'center',
          color: 'black',
          marginTop:theme.spacing(5)
          }}
          gutterBottom
          variant="h6"
          component="div">
        {title}
      </Typography>
      <Typography sx={{
          fontFamily: 'Karla',
          fontWeight: 700 ,
          textAlign: 'center',
          }}
          gutterBottom
          variant="body1"
          component="div">
        Serves 4
      </Typography>
    </Grid>

    <Grid container sx={{marginTop: theme.spacing(4), paddingTop: theme.spacing(1), borderTop: 1}}>
    <Grid item xs={4}>
    <Typography sx={{
        fontFamily: 'Karla',
        fontWeight: 700 ,
        textAlign: 'center',
        color: 'black',
        borderRight:1,
        }}
        gutterBottom
        variant="body1"
        component="div">
      Prep Time: 5 minutes
    </Typography>
    </Grid>

    <Grid item xs={4}>
    <Typography sx={{
        fontFamily: 'Karla',
        fontWeight: 700 ,
        textAlign: 'center',
        color: 'black',
        borderRight:1,
        }}
        gutterBottom
        variant="body1"
        component="div">
      Cook Time: 5 minutes
    </Typography>
    </Grid>

    <Grid item xs={4}>
    <Typography sx={{
        fontFamily: 'Karla',
        fontWeight: 700 ,
        textAlign: 'center',
        color: 'black',
        }}
        gutterBottom
        variant="body1"
        component="div">
      Total Time: 5 minutes
    </Typography>
    </Grid>


    <Grid item xs={1}>
    </Grid>

    <Grid item xs={10}>
    <Typography sx={{
        fontFamily: 'Jost',
        fontWeight: 700 ,
        color: 'black',
        marginTop: theme.spacing(8)
        }}
        gutterBottom
        variant="body1"
        component="div">
      Ingredients
    </Typography>
    </Grid>

    <Grid item xs={1}>
    </Grid>


    <Grid item xs={1}>
    </Grid>

    <Grid item xs={10}>
    <ul>
        {ingredients.map(ingredient => (
          <li style={{
            fontFamily:'Karla',
            color:'black',
            fontWeight:500,
            fontSize:theme.spacing(4),
          }}>{ingredient}</li>
        ))}
      </ul>
    </Grid>

    <Grid item xs={1}>
    </Grid>


    <Grid item xs={1}>
    </Grid>

    <Grid item xs={10}>



    {steps.map(step => (
      <Typography style={{
        fontFamily:'Karla',
        color:'black',
        fontWeight:500,
      }}
      variant="body1"
      >{step}</Typography>
    ))}

    </Grid>

    <Grid item xs={1}>
    </Grid>



  </Grid>

    </CardContent>
  </Card>
  </Grid>



    </ThemeProvider>
  )
}

export default FeaturedPosts
