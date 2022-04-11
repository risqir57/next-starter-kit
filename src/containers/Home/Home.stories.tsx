import { StoryBookNavEnum } from '@enums/StoryBook.enum';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Home from './Home.container';

const metaConfig = {
  title: StoryBookNavEnum.STORYBOOK_APP_CONTAINER,
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const HomeContainer = Template.bind({});

export default metaConfig;
