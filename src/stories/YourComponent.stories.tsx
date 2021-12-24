// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Panel  from '../atom/Panel';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: Panel,
} as ComponentMeta<typeof Panel>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
  
};
