import Header from '../../atom/Header'
import AustinBlogGrid from '../../molecule/AustinBlogGrid'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import { Grid } from '@mui/material';

import Travel_Icon from '../../assets/images/icons/travel_icon.png';

const Austin = () => {

  return (
    <ThemeProvider theme={theme}>

      <Grid container justifyContent='center' sx={{ marginTop: theme.spacing(2) }}>
        <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{ maxHeight: theme.spacing(13) }} src={Travel_Icon} alt="travel" />
        </Grid>
      </Grid>
      <Header text={"Austin"} margin={1} />
      <AustinBlogGrid />




    </ThemeProvider>

  )
}

export default Austin
