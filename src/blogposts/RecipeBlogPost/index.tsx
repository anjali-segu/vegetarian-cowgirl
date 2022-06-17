import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Media from 'react-media';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';

interface Props {
  image: string,
  icon: string,
  title: string,
  subtitle: string,
  subtitle2: string,
  ingredients: string[],
  steps: string[],
  preptime: string,
  cooktime: string,
  totaltime: string,
  serves: number,
}


const RecipeBlogPost = (props:Props) => {
const {image,
       icon,
       title,
       subtitle,
       subtitle2,
       ingredients,
       steps,
       preptime,
       cooktime,
       totaltime,
       serves} = props
  return (
    <ThemeProvider theme={theme}>
    <Typography sx={{
        fontFamily: 'Jost',
        fontWeight: 500 ,
        textAlign: 'center',
        color: 'black',
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      }}
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

  <Media query="(max-width: 599px)" render={() =>
    (
      <Grid container justifyContent='center' sx={{marginTop:theme.spacing(10)}}>
        <Grid item xs={8} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(80)}} src={image} alt="Paris"/>
        </Grid>
      </Grid>

    )}
  />
  <Media query="(min-width: 600px)" render={() =>
    (
      <Grid container justifyContent='center' sx={{marginTop:theme.spacing(10)}}>
        <Grid item xs={8} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(150)}} src={image} alt="Paris"/>
        </Grid>
      </Grid>

    )}
  />

  <Grid container justifyContent='center'>
    <Grid item xs={8} md={6}>
  <Typography sx={{
      fontFamily: 'Karla',
      fontWeight: 300 ,
      color: 'black',
      marginTop: theme.spacing(8)}}
      gutterBottom
      variant="body1"
      component="div">
    {subtitle2}
  </Typography>
  </Grid>
  </Grid>





<Grid container justifyContent='center' sx={{marginTop:theme.spacing(10)}}>
  <Card id='recipe'sx={{
    [theme.breakpoints.only('xs')]:{
      minWidth: theme.spacing(10),
    },
    marginBottom:theme.spacing(5),
    marginLeft:theme.spacing(2),
    marginRight:theme.spacing(2),
    maxWidth:theme.spacing(160),
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
        Serves {serves}
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
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        }}
        gutterBottom
        variant="body1"
        component="div">
      Prep Time: {preptime}
    </Typography>



    </Grid>

    <Grid item xs={4}>
    <Typography sx={{
        fontFamily: 'Karla',
        fontWeight: 700 ,
        textAlign: 'center',
        color: 'black',
        borderRight:1,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        }}
        gutterBottom
        variant="body1"
        component="div">
      Cook Time: {cooktime}
    </Typography>
    </Grid>

    <Grid item xs={4}>
    <Typography sx={{
        fontFamily: 'Karla',
        fontWeight: 700 ,
        textAlign: 'center',
        color: 'black',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        }}
        gutterBottom
        variant="body1"
        component="div">
      Total Time: {totaltime}
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
    <Typography sx={{
        fontFamily: 'Jost',
        fontWeight: 700 ,
        color: 'black',
        marginTop: theme.spacing(8)
        }}
        gutterBottom
        variant="body1"
        component="div">
      Steps
    </Typography>
    </Grid>

    <Grid item xs={1}>
    </Grid>


    <Grid item xs={1}>
    </Grid>

    <Grid item xs={10}>



    <ol>
        {steps.map(step => (
          <li style={{
            fontFamily:'Karla',
            color:'black',
            fontWeight:500,
            fontSize:theme.spacing(4),
          }}>{step}</li>
        ))}
      </ol>

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

export default RecipeBlogPost
