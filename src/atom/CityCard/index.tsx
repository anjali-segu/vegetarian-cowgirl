import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'

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
   </Card>
   </ThemeProvider>

  )
}


export default CityCard
