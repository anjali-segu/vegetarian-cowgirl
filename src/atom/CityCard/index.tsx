import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme';
import Media from 'react-media';


interface Props {
  image: string,
  city: string,
  link: string,
}


const CityCard = (props:Props) => {
  const {image, city, link} = props

  return (
    <ThemeProvider theme={theme}>
    <Card>

    <Media query="(max-width: 400px)" render={() =>
      (
        <CardActionArea href={link}>
        <CardContent sx={{justifyContent:'center'}}>
        <img style={{width:theme.spacing(30)}} src={image} alt="Italian Trulli"/>
        <Typography sx={{
          fontWeight: 500 ,
          fontFamily: 'Jost',
          textAlign: 'center',
          paddingTop: theme.spacing(2),
          paddingLeft: theme.spacing(3),
          }}
          variant="body2"
          color="black">
          {city}
        </Typography>
        </CardContent>
        </CardActionArea>

      )}
    />

    <Media query="(min-width: 401px)" render={() =>
      (
        <CardActionArea href={link}>
        <CardContent>
        <img style={{width:theme.spacing(40), display:'block', marginLeft:'auto', marginRight:'auto'}} src={image} alt="Italian Trulli"/>
        <Typography sx={{
          fontWeight: 500 ,
          fontFamily: 'Jost',
          textAlign: 'center',
          paddingTop: theme.spacing(2),
          }}
          variant="h6"
          color="black">
          {city}
        </Typography>
        </CardContent>
        </CardActionArea>

      )}
    />

   </Card>
   </ThemeProvider>

  )
}


export default CityCard
