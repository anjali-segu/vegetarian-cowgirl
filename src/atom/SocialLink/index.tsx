import React from 'react';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
interface Props {
  content: React.ReactElement,
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


const SocialLink = (props: Props) => {
  const { content, url } = props
  //const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <a href={url} target="__blank">
        <Button
          disableRipple
          disableElevation

          sx={{
            fontFamily: 'Karla',
            fontWeight: 600,
            color: 'black',
            paddingLeft: 0.5,
            paddingRight: 0.5,
            minWidth: theme.spacing(1),
            "&:hover": {
              backgroundColor: "#ffffff",
              color: "#f09b85",
            },
          }}
        //component={RouterLink}
        //to={{pathname: "www.google.com" }}
        >
          {content}
        </Button>
      </a>
    </ThemeProvider>
  )
}

export default SocialLink
