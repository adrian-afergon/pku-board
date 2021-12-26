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
    pokemon: {
      name: "pokemon",
      description: "Pokémon for being displayed inside the Chip",
      defaultValue: {
        imageUrl: "",
        name: "",
        id: 0
      }
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