import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Timer} from "./Timer";

export default {
  title: 'Components/Timer',
  component: Timer,
  argTypes: {
    time: {
      name: "time",
      description: "Time for being displayed"
    },
    maxTime: {
      name: "maxTime",
      description: "Max time value for being selected"
    },
    minTime: {
      name: "minTime",
      description: "Min time value for being selected",
    },
    onChange: {
      name: "onChange",
      description: "Trigger an event when time has been change",
      action: "Timer has been change"
    }
  },
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

export const Default = Template.bind({});
Default.args = {};