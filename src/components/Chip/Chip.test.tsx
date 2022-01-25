import {render, screen} from "@testing-library/react";
import {Chip} from "./Chip";

describe('Chip', () => {
  it('display the component', () => {
    const name = 'irrelevant'
    render(<Chip label={name}/>)
    screen.getByLabelText(name)
  })
});