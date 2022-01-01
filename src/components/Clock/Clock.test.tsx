import {fireEvent, render, screen} from "@testing-library/react";
import {Clock} from "./Clock";

describe('Clock', () => {
  it('display minutes and seconds', () => {
    render(<Clock time={450} />)

    screen.getByDisplayValue('07')
    screen.getByDisplayValue('30')
  });

  it('triggers an event when minutes has change', () => {
    const onChangeMock = jest.fn()
    render(<Clock time={450} onChange={onChangeMock}/>)
    const minutes = screen.getByLabelText("minutes")

    fireEvent.change(minutes, {target: {value: "1"}})

    expect(onChangeMock).toHaveBeenCalledWith(90)
  });

  it('triggers an event when seconds has change', () => {
    const onChangeMock = jest.fn()
    render(<Clock time={450} onChange={onChangeMock}/>)
    const seconds = screen.getByLabelText("seconds")

    fireEvent.change(seconds, {target: {value: "00"}})

    expect(onChangeMock).toHaveBeenCalledWith(420)
  });

  it('not triggers an event when seconds are greater than 60', () => {
    const onChangeMock = jest.fn()
    render(<Clock time={450} onChange={onChangeMock}/>)
    const seconds = screen.getByLabelText("seconds")

    fireEvent.change(seconds, {target: {value: "61"}})

    expect(onChangeMock).not.toHaveBeenCalled()
  });

  it('not triggers an event when minutes are greater than default max', () => {
    const onChangeMock = jest.fn()
    render(<Clock time={450} onChange={onChangeMock}/>)
    const minutes = screen.getByLabelText("minutes")

    fireEvent.change(minutes, {target: {value: "11"}})

    expect(onChangeMock).not.toHaveBeenCalled()
  });

  it('not triggers an event when changed minutes are greater than max time', () => {
    const onChangeMock = jest.fn()
    render(<Clock time={450} onChange={onChangeMock} maxTime={120}/>)
    const minutes = screen.getByLabelText("minutes")

    fireEvent.change(minutes, {target: {value: "3"}})

    expect(onChangeMock).not.toHaveBeenCalled()
  });

  it('not triggers an event when changed seconds are greater than max time', () => {
    const onChangeMock = jest.fn()
    render(<Clock time={61} onChange={onChangeMock} maxTime={61}/>)
    const seconds = screen.getByLabelText("seconds")

    fireEvent.change(seconds, {target: {value: "2"}})

    expect(onChangeMock).not.toHaveBeenCalled()
  });

});