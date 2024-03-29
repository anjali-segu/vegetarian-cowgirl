import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import { Grid, useMediaQuery } from '@mui/material';
import Header from '../../atom/Header'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


import About_Image from '../../assets/images/about/rainbow.jpg';

const About = () => {
  const matchNarrow = useMediaQuery('(max-width: 400px)');
  const matchMedium = useMediaQuery('(max-width: 800px)');
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        {matchNarrow
          ? (
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ maxHeight: theme.spacing(45), marginTop: theme.spacing(2) }} src={About_Image} alt="Anjali under a rainbow in Hawaii." />
            </Grid>

          )
          : matchMedium
            ? (
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <img style={{ maxHeight: theme.spacing(70), marginTop: theme.spacing(2) }} src={About_Image} alt="Anjali under a rainbow in Hawaii." />
              </Grid>
            )
            : (
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <img style={{ maxHeight: theme.spacing(120), marginTop: theme.spacing(2) }} src={About_Image} alt="Anjali under a rainbow in Hawaii." />
              </Grid>
            )
        }


      </Grid>
      <Header text={"Meet Anjali"} />
      <Grid container sx={{ marginTop: theme.spacing(8) }}>
        <Grid item xs={2} md={3} sx={{ justifyContent: 'center' }}>
        </Grid>
        <Grid item xs={8} md={6} sx={{ justifyContent: 'center' }}>
          <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 400,
          }}
            gutterBottom
            variant="h6"
            component="div">
            Anjali Segu is an Austin Lifestyle blogger behind The Vegetarian Cowgirl, Austin&apos;s top vegetarian food and travel blog. The Vegetarian Cowgirl features the top vegetarian and vegan restaurants in Austin. Anjali travels the world on her hunt to find the top vegetarian food.         </Typography>
        </Grid>
        <Grid item xs={2} md={3} sx={{ justifyContent: 'center' }}>
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: theme.spacing(8) }}>
        <Grid item xs={2} md={3} sx={{ justifyContent: 'center' }}>
        </Grid>
        <Grid item xs={8} md={6} sx={{ justifyContent: 'center' }}>
          <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 400,
          }}
            gutterBottom
            variant="h6"
            component="div">
            Anjali graduated from Texas A&M in 2023 with a Bachelor&apos;s in Computer Science. She loves traveling, baking, and cooking in her free time. She is passionate about her plant-based lifestyle and wants to share her finds in Austin and around the globe through her travels. What started as a personal tool to share with her family and friends has become much more for all to explore.
          </Typography>
        </Grid>
        <Grid item xs={2} md={3} sx={{ justifyContent: 'center' }}>
        </Grid>
      </Grid>

      <Header text={"About the Blog"} />
      <Grid container sx={{ marginTop: theme.spacing(8) }}>
        <Grid item xs={2} md={3} sx={{ justifyContent: 'center' }}>
        </Grid>
        <Grid item xs={8} md={6} sx={{ justifyContent: 'center' }}>
          <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 400,
          }}
            gutterBottom
            variant="h6"
            component="div">
            Launched in 2021, the Vegetarian Cowgirl is a new up-and-coming lifestyle blog in Austin, TX. The blog features Anjali&apos;s favorite vegetarian recipes and her must-try bakes. Anjali has traveled across Europe, Asia, and North and South America. She shares her top food and activity finds in cities. Check out the travel itineraries that she has created. The goal of the blog is to celebrate plant-based eating internationally.
          </Typography>
        </Grid>
        <Grid item xs={2} md={3} sx={{ justifyContent: 'center' }}>
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
          Follow On Instagram
        </Typography>
      </Grid>

      <Grid container justifyContent="center" sx={{ marginBottom: theme.spacing(15) }}>
        <Link underline="none" target="_blank" href="https://www.instagram.com/thevegetariancowgirl/" >
          <Typography sx={{
            fontFamily: 'Jost',
            fontWeight: 500,
            color: '#f09b85'
          }}
            gutterBottom
            variant="h4"
            component="div">
            @thevegetariancowgirl
          </Typography>
        </Link>
      </Grid>




    </ThemeProvider>

  )
}

export default About
