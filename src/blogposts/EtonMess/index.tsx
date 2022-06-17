import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import RecipeBlogPost from '../../blogposts/RecipeBlogPost'

import Eton_Mess_Blog_Square from '../../assets/images/blog_posts/eton_mess_blog_square.png';

import Baking_Icon from '../../assets/images/icons/baking_icon.png';

interface Props {
}


const EtonMess = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
    <RecipeBlogPost
      image={Eton_Mess_Blog_Square}
      icon={Baking_Icon}
      title="Eton Mess Summer Dessert"
      subtitle={`This refreshing dessert is perfect for any summer dinner.
        Dreamy whipped cream with crunch meringue, layered with fresh strawberries
         and raspberries. `}
      subtitle2={`This is a classic British treat! Inspired by my obsession with the
                  Great British Bake Off. The recipe itself is easy to make and can
                  be prepped in advance and assembled in minutes. It keeps well up to 3 days.
                  You will need an electric whisk as this recipe does have meringue involved.
                  `}
      ingredients= {['2 large egg whites',
                     '120g granulated sugar',
                     '500g strawberries, hulled and roughly chopped',
                     '1 cup heavy cream',
                     '1 teaspoon powder sugar',
                     '1/2 cup raspberries']}
      steps= {[`Heat oven to 250F fan/gas 1 and line a large baking tray with parchment paper.`,
               `Whisk the egg whites in a clean bowl using an electric whisk or tabletop mixer until they reach stiff peaks,
                then add the sugar in 3 lots, re-whisking to stiff peaks every time.`,
                `Spoon dollops of the mixture onto the baking parchment.`,
                `Cook on the bottom shelf of the oven for 1hr – 1hr 15 mins until the meringues are completely hard
                and come off the paper easily. Leave to cool.`,
                `Blitz 1/3 of the strawberries to make a strawberry sauce.`,
                `In a large bowl whisk the heavy cream with the icing sugar until it just holds its shape.`,
                `Layer whipped cream, fresh strawberries, fresh raspberries, strawberry puree, meringue. Repeat until glass if full.`]}
      preptime= "20 minutes"
      cooktime= "1 hr 15 minutes"
      totaltime= "1 hr 35 minutes"
      serves= {4}
      />

    </ThemeProvider>
  )
}

export default EtonMess
