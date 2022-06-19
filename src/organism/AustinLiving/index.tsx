import AustinLivingNav from '../../atom/AustinLivingNav'
import Header from '../../atom/Header'
import RestaurantsBlogGrid from '../../molecule/RestaurantsBlogGrid'
import AustinActivitiesBlogGrid from '../../molecule/AustinActivitiesBlogGrid'
import DrinksBlogGrid from '../../molecule/DrinksBlogGrid'
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import HeaderImage from '../../atom/HeaderImage'
import { Grid } from '@mui/material';

import Plant_Store_Blog_Square from '../../assets/images/blog_posts/plant_store_blog_square.jpg';

import Activities_Icon from '../../assets/images/icons/activities_icon.png';
import Other_Icon from '../../assets/images/icons/other_icon.png';
import Restaurants_Icon from '../../assets/images/icons/restaurants_icon.png';

interface Props {
}


const AustinLiving = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
      <AustinLivingNav/>
      <HeaderImage image={Plant_Store_Blog_Square}
                   title="My Favorite Austin Plant Stores"
                   description= "I am absolutely obsessed with plants. Check out my guide to Austin plant stores and where I get our landscaping plants as well as our house plants."
                   link="/austin-living/plant-stores"
                   />
       <Grid container justifyContent='center'>
         <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(13)}}src={Restaurants_Icon} alt="Paris"/>
         </Grid>
       </Grid>
      <Header id={"restaurants"} text={"Restaurants"} margin={1}/>
      <RestaurantsBlogGrid/>

      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
         <img style={{maxHeight: theme.spacing(13)}}src={Activities_Icon} alt="Paris"/>
        </Grid>
      </Grid>
      <Header id={"austinactivities"}text={"Austin Activities"} margin={1}/>
      <AustinActivitiesBlogGrid/>

      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
         <img style={{maxHeight: theme.spacing(13)}}src={Other_Icon} alt="Paris"/>
        </Grid>
      </Grid>
      <Header id={"other"}text={"Other"} margin={1}/>
      <DrinksBlogGrid/>

    </ThemeProvider>

  )
}

export default AustinLiving
