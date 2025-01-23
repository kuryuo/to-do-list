import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from './TodoItem';

test('renders TodoItem and handles toggle and delete', () => {
  const onToggle = jest.fn();
  const onDelete = jest.fn();
  render(
    <TodoItem
      id="1"
      text="Test Todo"
      completed={false}
      onToggle={onToggle}
      onDelete={onDelete}
    />
  );

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(onToggle).toHaveBeenCalledWith('1');

  const deleteButton = screen.getByRole('button');
  fireEvent.click(deleteButton);
  expect(onDelete).toHaveBeenCalledWith('1');
});