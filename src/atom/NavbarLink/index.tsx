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


const NavbarLink = (props:Props) => {
  const {content, url} = props
  //const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
    <Button
      // className={classes.link}
      sx={{
        fontFamily: 'Karla',
        fontWeight: 600,
        color: 'black',
        borderRadius: 0,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        "&:hover": {
          backgroundColor: "#ffffff",
          color: "#f09b85",
          borderBottom: 3,
          borderRadius: 0,
          paddingBottom: theme.spacing(.25),
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

export default NavbarLink
