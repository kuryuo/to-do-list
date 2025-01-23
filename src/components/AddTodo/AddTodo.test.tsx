import { render, screen, fireEvent } from '@testing-library/react';
import { AddTodo } from './AddTodo';


describe('AddTodo component', () => {
  it('should call onAdd when form is submitted with a non-empty text', () => {
    const onAdd = jest.fn();
    render(<AddTodo onAdd={onAdd} />);

    const input = screen.getByPlaceholderText('Add new task');
    const button = screen.getByText('ADD');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(onAdd).toHaveBeenCalledWith('New Task');
  });

  it('should not call onAdd when form is submitted with an empty text', () => {
    const onAdd = jest.fn();
    render(<AddTodo onAdd={onAdd} />);

    const button = screen.getByText('ADD');

    fireEvent.click(button);

    expect(onAdd).not.toHaveBeenCalled();
  });
});