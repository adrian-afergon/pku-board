import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Clock} from "./Clock";

export default {
  title: 'Components/Clock',
  component: Clock,
  argTypes: {
    time: {
      name: "time",
      description: "Time to be displayed at Clock",
    },
    maxTime: {
      name: "maxTime",
      description: "Max time to be displayed at Clock."
    },
    minTime: {
      name: "minTime",
      description: "Min time to be displayed at Clock "
    },
    onChange: {
      name: "onChange",
      description: "event triggered when Clock value has changed",
      action: "Time has changed"
    }
  },
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const Default = Template.bind({});
Default.args = {
  time: 600
};