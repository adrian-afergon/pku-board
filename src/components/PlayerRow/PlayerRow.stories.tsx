import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {PlayerRow} from "./PlayerRow";

export default {
  title: 'Components/PlayerRow',
  component: PlayerRow,
  argTypes: {
    rolesOptions: {
      name: "roleOptions",
      description: "list of roles an position for being applied",
      defaultValue: [
        {top: {x: 0, y: 0}, jungle: {x: 0, y: 0}, bottom: {x: 0, y: 0}, invade: {x: 0, y: 0}}
      ]
    },
    pokemonOptions: {
      name: "pokemonOptions",
      description: "list of Pokémon for being selected",
      defaultValue: [{
        imageUrl: "",
        name: "Example",
        id: 0
      }]
    },
    onChange: {
      name: "onChange",
      description: "Trigger the given function when the row has change with valid data",
      action: "Player Row has change"
    }
  },
} as ComponentMeta<typeof PlayerRow>;

const Template: ComponentStory<typeof PlayerRow> = (args) => <PlayerRow {...args} />;

export const Default = Template.bind({});
Default.args = {};