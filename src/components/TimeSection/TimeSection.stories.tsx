import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {TimeSection} from "./TimeSection";

export default {
  title: 'Sections/TimeSection',
  component: TimeSection,
  argTypes: {
    maxTime: {
      name: "maxTime",
      description: "Max time for being selected at timer"
    }
  },
} as ComponentMeta<typeof TimeSection>;

const Template: ComponentStory<typeof TimeSection> = (args) => <TimeSection {...args} />;

export const Default = Template.bind({});
Default.args = {};