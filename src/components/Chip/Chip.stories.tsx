import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Chip} from "./Chip";

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    color: {
      name: "color",
      description: "border color for the Chip component",
    },
    label: {
      name: "label",
      description: "label for the given Chip. This value is used at DOM level."
    },
    image: {
      name: "image",
      description: "Image file name for the given Chip. This value is used as background image "
    }
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Yellow = Template.bind({});
Yellow.args = {
  color: "yellow"
};

export const Purple = Template.bind({});
Purple.args = {
  color: "purple"
};

export const Gray = Template.bind({});
Gray.args = {
  color: "gray"
};