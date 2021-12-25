import {render, screen} from "@testing-library/react";
import App from "./App";

describe('App', () => {
  it('render the application', () => {

    render(<App />)

    screen.getByText('Pokémon Unite - Board')

  });
});