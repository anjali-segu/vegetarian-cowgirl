import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Media from 'react-media';
import CardContent from '@mui/material/CardContent';

interface Props {
  image: string,
  image2: string,
  icon: string,
  title: string,
  subtitle: string,
  paras: string[],
  steps: string[],
  alt: string,
  alt2: string,
  alticon: string,

}


const StandardBlogPost = (props:Props) => {
const {image, image2, icon, title, subtitle, paras, steps, alt, alt2, alticon} = props
  return (
    <ThemeProvider theme={theme}>
    <Grid container justifyContent='center'>
      <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
       <img style={{maxHeight: theme.spacing(13)}}src={icon} alt={alticon}/>
      </Grid>
    </Grid>
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

  <Media query="(max-width: 599px)" render={() =>
    (
      <Grid container justifyContent='center' sx={{marginTop:theme.spacing(10)}}>
        <Grid item xs={8} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(80)}} src={image} alt={alt}/>
        </Grid>
      </Grid>

    )}
  />
  <Media query="(min-width: 600px)" render={() =>
    (
      <Grid container justifyContent='center' sx={{marginTop:theme.spacing(10)}}>
        <Grid item xs={8} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(120)}} src={image} alt={alt}/>
        </Grid>
      </Grid>

    )}
  />

  <Grid container justifyContent='center'>
    <Grid item xs={8} md={6}>

        {paras.map(para => (
          <Typography dangerouslySetInnerHTML={{__html: para}} sx={{
              fontFamily: 'Karla',
              fontWeight: 300 ,
              color: 'black',
              marginTop: theme.spacing(8)}}
              gutterBottom
              variant="body1"
              component="div" />
        ))}
    </Grid>
  </Grid>

  <Media query="(max-width: 599px)" render={() =>
    (
      <Grid container justifyContent='center' sx={{marginTop:theme.spacing(10)}}>
        <Grid item xs={8} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(55)}} src={image2} alt={alt2}/>
        </Grid>
      </Grid>

    )}
  />
  <Media query="(min-width: 600px)" render={() =>
    (
      <Grid container justifyContent='center' sx={{marginTop:theme.spacing(10)}}>
        <Grid item xs={8} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(80)}} src={image2} alt={alt2}/>
        </Grid>
      </Grid>

    )}
  />





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

    </Grid>

    <Grid container sx={{marginTop: theme.spacing(4), paddingTop: theme.spacing(1), borderTop: 1}}>

    <Grid item xs={1}>
    </Grid>

    <Grid item xs={10}>
    <Typography sx={{
        fontFamily: 'Jost',
        fontWeight: 700 ,
        color: 'black',
        marginTop: theme.spacing(8),
        textAlign: 'center',
        }}
        gutterBottom
        variant="body1"
        component="div">
      Itinerary
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

export default StandardBlogPost
