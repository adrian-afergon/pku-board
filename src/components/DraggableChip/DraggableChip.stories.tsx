import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {DraggableChip} from "./DraggableChip";

export default {
  title: 'Components/DraggableChip',
  component: DraggableChip,
  argTypes: {
    pokemon: {
      name: "pokemon",
      description: "Pokémon for being displayed inside the Chip",
      defaultValue: {
        imageUrl: "",
        name: "",
        id: 0
      }
    },
    positionX: {
      name: "positionX",
      description: "position of the Chip component at axis X",
      defaultValue: "0",
      type: "number"
    },
    positionY: {
      name: "positionY",
      description: "position of the Chip component at axis Y",
      defaultValue: "0",
      type: "number"
    },
    color: {
      name: "color",
      description: "border color for the Chip component",
    },
    onPositionChange: {
      action: "position changed",
      name: "onPositionChange",
      description: "run an event at the moment that the Chip moved"
    }
  },
} as ComponentMeta<typeof DraggableChip>;

const Template: ComponentStory<typeof DraggableChip> = (args) => <div style={{
  width:"1024", height:"768", position: "relative"
}} >
  <DraggableChip {...args} />
</div>;

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