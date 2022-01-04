import { Grid } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent='center'>
        <ImageList
          sx={{ width: 1300, height: 540 }}
          variant="quilted"
          cols={10}
          rowHeight={130}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </ThemeProvider>
  );
}

const itemData = [
  {
    img: 'art/Cactus.png',
    title: 'Cactus',
    rows: 2,
    cols: 2,
  },
  {
    img: 'art/RainbowPlant.png',
    title: 'Rainbow Plant',
  },
  {
    img: 'art/mountain.png',
    title: 'Black and White Mountain Range',
  },
  {
    img: 'art/Rectangle.PNG',
    title: 'Rectangle',
    cols: 2,
  },
  {
    img: 'art/WhiskeyMonstera.png',
    title: 'Monstera',
    rows: 2,
    cols: 1,
  },
  {
    img: 'art/TequilaRoses.png',
    title: 'Roses',
    rows: 2,
    cols: 1,
  },
  {
    img: 'art/olive.png',
    title: 'Olive Plant',
    rows: 2,
    cols: 2,
  },
  {
    img: 'art/sunflower.png',
    title: 'Sunflower Brain',
  },
  {
    img: 'art/Monstera.png',
    title: 'Monstera',
    rows:3,
    cols:3,
  },


  {
    img: 'art/leaves.png',
    title: 'Leaves',
  },
  {
    img: 'art/Female_Silhouette.png',
    title: 'Female Silhouette',
    rows: 2,
    cols: 2,
  },
  {
    img: 'art/WomanFlippingOff.png',
    title: 'Feminist',
    rows: 2,
    cols: 2,
  },
  {
    img: 'art/male_female.png',
    title: 'Male and Female',
    rows: 2,
    cols: 1,
  },
  {
    img: 'art/Patriarchy.png',
    title: 'Patriarchy',
  },
  {
    img: 'art/flower.png',
    title: 'Flower in Glass',
  },
  {
    img: 'art/emotions.png',
    title: 'Emotions',
  },



];
