import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Indianapolis_Airbnb_Blog_Square from '../../assets/images/blog_posts/indianapolis_airbnb_blog_square.jpg';
import Indianapolis_Art_Blog_Square from '../../assets/images/blog_posts/indianapolis_art_blog_square.jpg';
import Indianapolis_Day_Trip_Blog_Square from '../../assets/images/blog_posts/indianapolis_day_trip_blog_square.jpeg';
import Indianapolis_Sights_Blog_Square from '../../assets/images/blog_posts/indianapolis_sights_blog_square.jpg';
import Indianapolis_Travel_Guid_Blog_Square from '../../assets/images/blog_posts/indianapolis_travel_guid_blog_square.jpg';
import Indianapolis_Vegetarian_Blog_Square from '../../assets/images/blog_posts/indianapolis_vegetarian_blog_square.jpg';

const IndianapolisBlogGrid = () => {

  return (
    <ThemeProvider theme={theme}>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Indianapolis_Travel_Guid_Blog_Square} title={'INDIANAPOLIS'} subtitle={'Indianapolis Travel Guide'} post={'/indianapolis/travel-guide'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Indianapolis_Art_Blog_Square} title={'INDIANAPOLIS'} subtitle={'Indianapolis Art Museum'} post={'/indianapolis/art-museum'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Indianapolis_Vegetarian_Blog_Square} title={'INDIANAPOLIS'} subtitle={'Vegetarian Restaurants to Visit'} post={'/indianapolis/vegetarian'} />
        </Grid>
      </Grid>
      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Indianapolis_Day_Trip_Blog_Square} title={'INDIANAPOLIS'} subtitle={'Day Trip to Indianapolis'} post={'/indianapolis/day-trip'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Indianapolis_Airbnb_Blog_Square} title={'INDIANAPOLIS'} subtitle={'Airbnbs in Indianapolis'} post={'/indianapolis/airbnbs'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Indianapolis_Sights_Blog_Square} title={'INDIANAPOLIS'} subtitle={'Top Coffee Shops'} post={'/indianapolis/coffee-shops'} />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default IndianapolisBlogGrid
