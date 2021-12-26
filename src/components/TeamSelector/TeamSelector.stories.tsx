import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {TeamSelector} from "./TeamSelector";

export default {
  title: 'Components/TeamSelector',
  component: TeamSelector,
  argTypes: {
    color: {
      name: "color",
      description: "Team color"
    },
    title: {
      name: "title",
      description: "Title dor the team"
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
    onPlayerChange: {
      name: "onChange",
      description: "Change an specific player position",
      action: "Player Row has change"
    }
  },
} as ComponentMeta<typeof TeamSelector>;

const Template: ComponentStory<typeof TeamSelector> = (args) => <TeamSelector {...args} />;

export const Default = Template.bind({});
Default.args = {};