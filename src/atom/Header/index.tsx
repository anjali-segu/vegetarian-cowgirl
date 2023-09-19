import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';

interface Props {
  text: string,
  id?: string,
  margin: number,
}

const theme = createTheme({
  typography: {
    fontFamily: [
      'Jost',
      'Karla',
      'sans-serif',
    ].join(','),
  },
});


const Header = (props: Props) => {
  const { text, id, margin } = props
  return (
    <ThemeProvider theme={theme}>
      <Typography id={id} sx={{
        [theme.breakpoints.only('xs')]: {
          fontSize: theme.spacing(3),
        },
        fontFamily: 'Jost',
        fontWeight: 400,
        marginTop: theme.spacing(margin),
        paddingBottom: theme.spacing(2),
        textAlign: 'center',
      }}
        variant="h4">
        {text}
      </Typography>
      <Grid container>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{
            fontFamily: 'Jost',
            fontWeight: 400,
            color: 'white',
            borderColor: 'black',
            marginBottom: theme.spacing(0),
            borderBottomWidth: theme.spacing(.45),
            borderBottomStyle: "solid",
            width: theme.spacing(6),
            fontSize: theme.spacing(.01),
          }}
            variant="body2">
            {text}
          </Typography>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

Header.defaultProps = {
  margin: 10,
}



export default Header
