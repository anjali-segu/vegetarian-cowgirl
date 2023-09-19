import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Arenal_Volcano_Anjali from '../../assets/images/blog_posts/arenal_volcano_anjali.jpg';

const BlogGrid = () => {

  return (
    <ThemeProvider theme={theme}>

      <Grid container sx={{ paddingTop: theme.spacing(15), paddingLeft: theme.spacing(30), paddingRight: theme.spacing(30), }}>

        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Arenal_Volcano_Anjali} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Arenal_Volcano_Anjali} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Arenal_Volcano_Anjali} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'} />
        </Grid>
      </Grid>

      <Grid container sx={{ paddingTop: theme.spacing(15), paddingLeft: theme.spacing(30), paddingRight: theme.spacing(30), }}>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Arenal_Volcano_Anjali} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Arenal_Volcano_Anjali} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'} />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Arenal_Volcano_Anjali} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'} />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default BlogGrid
