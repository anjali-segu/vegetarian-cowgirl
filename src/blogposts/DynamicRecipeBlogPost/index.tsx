import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Media from 'react-media';
import ThemeProvider from '@mui/styles/ThemeProvider'
import Typography from '@mui/material/Typography';

import Recipe from '../../utils/recipe'
import { theme } from '../../utils/theme'
import RecipeCard from '../../atom/RecipeCard';

type Props = Recipe

const DynamicRecipeBlogPost = (props: Props) => (
  <ThemeProvider theme={theme}>
    <Typography sx={{
      fontFamily: 'Jost',
      fontWeight: 500,
      textAlign: 'center',
      color: 'black',
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    }}
      gutterBottom
      variant="h4"
      component="div">
      {props.title}
    </Typography>

    <Grid container justifyContent='center'>
      <Grid item xs={8} md={6}>
        <Typography sx={{
          fontFamily: 'Karla',
          fontWeight: 300,
          textAlign: 'center',
          color: 'black',
          fontStyle: 'italic',
          marginTop: theme.spacing(4)
        }}
          gutterBottom
          variant="body1"
          component="div">
          {props.subtitle}
        </Typography>
      </Grid>
    </Grid>

    <Grid container justifyContent='center'>
      <Button href={"#recipe"} sx={{
        marginTop: theme.spacing(4),
        backgroundColor: "#f09b85",
        borderRadius: 0,
        "&:hover": {
          backgroundColor: "#ffffff",
          color: "#f09b85",

        },
      }}
        variant="contained"
        disableElevation size="medium">
        Jump to Recipe
      </Button>
    </Grid>

    <Media query="(max-width: 1439px)" render={() =>
    (
      <Grid container justifyContent='center' sx={{ marginTop: theme.spacing(10) }}>
        {props.images.map(({src, alt}) => <Grid key={src} item xs={8} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{ maxHeight: theme.spacing(80), marginBottom: theme.spacing(5) }} src={src} alt={alt} />
        </Grid>)}
      </Grid>

    )}
    />
    <Media query="(min-width: 1440px)" render={() =>
    (
        <Grid container justifyContent='center' sx={{ marginTop: theme.spacing(10) }}>
          {props.images.map(({src, alt}) => <Grid key={src} item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img style={{ maxHeight: theme.spacing(85) }} src={src} alt={alt} />
          </Grid>)}
        </Grid>
    )}
    />

    <Grid container justifyContent='center'>
      <Grid item xs={8} md={6}>
        <Typography sx={{
          fontFamily: 'Karla',
          fontWeight: 300,
          color: 'black',
          marginTop: theme.spacing(8)
        }}
          gutterBottom
          variant="body1"
          component="div">
          {props.subtitle2}
        </Typography>
      </Grid>
    </Grid>

    <RecipeCard {...props} />

  </ThemeProvider>
)

export default DynamicRecipeBlogPost