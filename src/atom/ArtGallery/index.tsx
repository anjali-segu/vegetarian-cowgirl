import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Cactus from '../../assets/images/art/Cactus.png';
import Emotions from '../../assets/images/art/emotions.png';
import Female_Silhouette from '../../assets/images/art/Female_Silhouette.png';
import Flower from '../../assets/images/art/flower.png';
import Leaves from '../../assets/images/art/leaves.png';
import Male_Female from '../../assets/images/art/male_female.png';
import Monstera from '../../assets/images/art/Monstera.png';
import Mountain from '../../assets/images/art/mountain.png';
import Olive from '../../assets/images/art/olive.png';
import Patriarchy from '../../assets/images/art/Patriarchy.png';
import RainbowPlant from '../../assets/images/art/RainbowPlant.png';
import Rectangle from '../../assets/images/art/Rectangle.png';
import Sunflower from '../../assets/images/art/sunflower.png';
import TequilaRoses from '../../assets/images/art/TequilaRoses.png';
import WhiskeyMonstera from '../../assets/images/art/WhiskeyMonstera.png';
import WomanFlippingOff from '../../assets/images/art/WomanFlippingOff.png';

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
    img: Cactus,
    title: 'Cactus',
    rows: 2,
    cols: 2,
  },
  {
    img: RainbowPlant,
    title: 'Rainbow Plant',
  },
  {
    img: Mountain,
    title: 'Black and White Mountain Range',
  },
  {
    img: Rectangle,
    title: 'Rectangle',
    cols: 2,
  },
  {
    img: WhiskeyMonstera,
    title: 'Monstera',
    rows: 2,
    cols: 1,
  },
  {
    img: TequilaRoses,
    title: 'Roses',
    rows: 2,
    cols: 1,
  },
  {
    img: Olive,
    title: 'Olive Plant',
    rows: 2,
    cols: 2,
  },
  {
    img: Sunflower,
    title: 'Sunflower Brain',
  },
  {
    img: Monstera,
    title: 'Monstera',
    rows:3,
    cols:3,
  },


  {
    img: Leaves,
    title: 'Leaves',
  },
  {
    img: Female_Silhouette,
    title: 'Female Silhouette',
    rows: 2,
    cols: 2,
  },
  {
    img: WomanFlippingOff,
    title: 'Feminist',
    rows: 2,
    cols: 2,
  },
  {
    img: Male_Female,
    title: 'Male and Female',
    rows: 2,
    cols: 1,
  },
  {
    img: Patriarchy,
    title: 'Patriarchy',
  },
  {
    img: Flower,
    title: 'Flower in Glass',
  },
  {
    img: Emotions,
    title: 'Emotions',
  },



];
