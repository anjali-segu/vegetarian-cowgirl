import Button from '@mui/material/Button'
import {Link as RouterLink} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
interface Props {
  content: any,
  url: string,
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


const LogoLink = (props:Props) => {
  const {content, url} = props
  //const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
    <Button
      disableRipple
      disableElevation
      // className={classes.link}
      sx={{
        color: 'black',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(61),
        paddingBottom: theme.spacing(2.5),
        "&:hover": {
          backgroundColor: "#ffffff",
        },
      }}
      component={RouterLink}
      to={url}
    >
      {content}
    </Button>
    </ThemeProvider>
  )
}

export default LogoLink
