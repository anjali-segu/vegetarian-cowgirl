import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import { Grid, useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Art_Icon from '../../assets/images/icons/art_icon.png';


interface Props {
  image: string,
  image2: string,
  image3: string,
  title: string,
  subtitle: string,
  paras: string[],
  alt: string,
  alt2: string,
  alt3: string,
  etsy_link: string,

}


const ArtBlogPost = (props: Props) => {

  const { image, image2, image3, title, subtitle, paras, alt, alt2, alt3, } = props
  const matches = useMediaQuery('(min-width:1440px)');
  return (

    <ThemeProvider theme={theme}>

      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{ maxHeight: theme.spacing(13) }} src={Art_Icon} alt="Paint brush with palette, black and white." />
        </Grid>
      </Grid>

      <Typography sx={{
        fontFamily: 'Jost',
        fontWeight: 500,
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
            fontWeight: 300,
            textAlign: 'center',
            color: 'black',
            fontStyle: 'italic',
            marginTop: theme.spacing(4)
          }}
            gutterBottom
            variant="body1"
            component="div">
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
      {matches
        ? (
          <Grid container justifyContent='center' sx={{ marginTop: theme.spacing(10), marginBottom: theme.spacing(5) }}>

            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ maxHeight: theme.spacing(85) }} src={image} alt={alt} />
            </Grid>

            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ maxHeight: theme.spacing(85) }} src={image2} alt={alt2} />
            </Grid>

            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ maxHeight: theme.spacing(85) }} src={image3} alt={alt3} />
            </Grid>
          </Grid>

        )
        : (
          <Grid container justifyContent='center' sx={{ marginTop: theme.spacing(10) }}>
            <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ maxHeight: theme.spacing(80), marginBottom: theme.spacing(5) }} src={image} alt={alt} />
            </Grid>

            <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ maxHeight: theme.spacing(80), marginBottom: theme.spacing(5) }} src={image2} alt={alt2} />
            </Grid>

            <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ maxHeight: theme.spacing(80), marginBottom: theme.spacing(5) }} src={image3} alt={alt3} />
            </Grid>
          </Grid>

        )}


      <Grid container justifyContent='center'>
        <Grid item xs={8} md={6}>

          {paras.map(para => (
            <Typography key={para} dangerouslySetInnerHTML={{ __html: para }} sx={{
              fontFamily: 'Karla',
              fontWeight: 300,
              color: 'black',
              marginTop: theme.spacing(8)
            }}
              gutterBottom
              variant="body1"
              component="div" />
          ))}
        </Grid>
      </Grid>


      <Grid container justifyContent="center" sx={{ marginTop: theme.spacing(15) }}>
        <Typography sx={{
          fontFamily: 'Jost',
          fontWeight: 500,
          color: 'black'
        }}
          gutterBottom
          variant="h4"
          component="div">
          Purchase My Art on Etsy
        </Typography>
      </Grid>

      <Grid container justifyContent="center" sx={{ marginBottom: theme.spacing(15) }}>
        <Link underline="none" target="_blank" href={props.etsy_link} >
          <Typography sx={{
            fontFamily: 'Jost',
            fontWeight: 500,
            color: '#f09b85'
          }}
            gutterBottom
            variant="h4"
            component="div">
            @PrintsByMinimalist
          </Typography>
        </Link>
      </Grid>



    </ThemeProvider>
  )
}

export default ArtBlogPost
