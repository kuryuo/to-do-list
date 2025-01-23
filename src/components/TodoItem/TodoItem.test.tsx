import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from './TodoItem';


describe('TodoItem component', () => {
  const todo = {
    id: '1',
    text: 'Test Todo',
    completed: false,
  };

  it('should render todo text and checkbox', () => {
    const onToggle = jest.fn();
    const onDelete = jest.fn();

    render(
      <TodoItem
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    );

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should call onToggle when checkbox is clicked', () => {
    const onToggle = jest.fn();
    const onDelete = jest.fn();

    render(
      <TodoItem
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(onToggle).toHaveBeenCalledWith('1');
  });

  it('should call onDelete when delete button is clicked', () => {
    const onToggle = jest.fn();
    const onDelete = jest.fn();

    render(
      <TodoItem
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    );

    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith('1');
  });
});