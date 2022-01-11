import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme,ThemeProvider } from '@mui/material/styles';

interface Props {
  image: string,
  title: string,
  subtitle: string,
  post:string,
}

const theme = createTheme({
  palette: {
    secondary: {
      main: "#f4f2ed",
    },
    background: {
      paper: "#f4f2ed",
    },
  },
  typography: {
   fontFamily: [
     'Jost',
     'Karla',
     'sans-serif',
   ].join(','),
 },
});


const MediaCard = (props:Props) => {
  const {image, title, subtitle,post} = props

  return (
    <ThemeProvider theme = {theme}>
    <Card sx={{
      [theme.breakpoints.up('sm')]:{
        marginBottom:theme.spacing(4),
      },
      [theme.breakpoints.up('xs')]:{
        marginBottom:theme.spacing(4),
      },
      minWidth: 345,
      boxShadow: 0,
      borderRadius: 0,
    }}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 300 ,
            textAlign: 'center'}}
            gutterBottom
            variant="body2"
            component="div">
          {title}
        </Typography>
        <Typography sx={{
          fontWeight: 700 ,
          textAlign: 'center',
          paddingTop: theme.spacing(2.5),
          }}
          variant="h6"
          color="black">
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions sx={{
                  display:'flex',
                  justifyContent:'center'}}>
            <Button href={post} sx={{
                  justifyContent: 'center',
                  backgroundColor: "#f09b85",
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    color: "#f09b85",

                  },
                  }}
                  variant="contained"
                  disableElevation size="small">
                  Read Post
              </Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  )
}

MediaCard.defaultProps = {
  image: '../../public/images/cards/costa.jpg',
}

export default MediaCard
