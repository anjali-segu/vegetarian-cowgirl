import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import { Grid, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import Restaurant_Icon from '../../assets/images/icons/restaurants_icon.png';

interface Props {
  image: string,
  image2: string,
  image3: string,
  image4: string,
  title: string,
  subtitle: string,
  paras: string[],
  orders: string[],
  alt: string,
  alt2: string,
  alt3: string,
  alt4: string,

}


const RestaurantBlogPost = (props: Props) => {
  const { image, image2, image3, image4, title, subtitle, paras, orders, alt, alt2, alt3, alt4 } = props
  const wideMatch = useMediaQuery('(min-width:1440px)');
  const narrowMatch = useMediaQuery('(min-width:600px)')
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{ maxHeight: theme.spacing(13) }} src={Restaurant_Icon} alt="Fork and spoon crossed icon, black and white." />
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

      {wideMatch
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

      {narrowMatch
        ? (
          <Grid container justifyContent='center' sx={{ marginTop: theme.spacing(10) }}>
            <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ maxHeight: theme.spacing(80) }} src={image4} alt={alt4} />
            </Grid>
          </Grid>

        )
        : (
          <Grid container justifyContent='center' sx={{ marginTop: theme.spacing(10) }}>
            <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ maxHeight: theme.spacing(55) }} src={image2} alt={alt2} />
            </Grid>
          </Grid>

        )}





      <Grid container justifyContent='center' sx={{ marginTop: theme.spacing(10) }}>
        <Card id='recipe' sx={{
          [theme.breakpoints.only('xs')]: {
            minWidth: theme.spacing(10),
          },
          marginBottom: theme.spacing(5),
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
          maxWidth: theme.spacing(200),
          minWidth: theme.spacing(160),
          border: 2
        }}>
          <CardContent>

            <Grid item lg={12}>
              <Typography sx={{
                fontFamily: 'Jost',
                fontWeight: 600,
                textAlign: 'center',
                color: 'black',
                marginTop: theme.spacing(5)
              }}
                gutterBottom
                variant="h6"
                component="div">
                {title}
              </Typography>

            </Grid>

            <Grid container sx={{ marginTop: theme.spacing(4), paddingTop: theme.spacing(1), borderTop: 1 }}>

              <Grid item xs={1}>
              </Grid>

              <Grid item xs={10}>
                <Typography sx={{
                  fontFamily: 'Jost',
                  fontWeight: 700,
                  color: 'black',
                  marginTop: theme.spacing(8),
                  textAlign: 'center',
                }}
                  gutterBottom
                  variant="body1"
                  component="div">
                  Ordering Guide
                </Typography>
              </Grid>

              <Grid item xs={1}>
              </Grid>

              <Grid item xs={3} sm={4}>
              </Grid>

              <Grid item xs={9} sm={8}>
                <ol>
                  {orders.map(step => (
                    <li key={step} style={{
                      fontFamily: 'Karla',
                      color: 'black',
                      fontWeight: 500,
                      fontSize: theme.spacing(4),
                    }}>{step}</li>
                  ))}
                </ol>
              </Grid>





            </Grid>

          </CardContent>
        </Card>
      </Grid>



    </ThemeProvider>
  )
}

export default RestaurantBlogPost
