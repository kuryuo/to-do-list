import { render, screen, fireEvent } from '@testing-library/react';
import { TodoList } from './TodoList';
import { Todo } from '../../types/todo';


describe('TodoList component', () => {
  const todos: Todo[] = [
    { id: '1', text: 'Task 1', completed: false },
    { id: '2', text: 'Task 2', completed: true },
  ];

  it('should render all todos by default', () => {
    render(
      <TodoList todos={todos} onToggle={() => {}} onDelete={() => {}} />
    );

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('should filter todos by active status', () => {
    render(
      <TodoList todos={todos} onToggle={() => {}} onDelete={() => {}} />
    );

    const activeTab = screen.getByText('Active');
    fireEvent.click(activeTab);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
  });

  it('should filter todos by completed status', () => {
    render(
      <TodoList todos={todos} onToggle={() => {}} onDelete={() => {}} />
    );

    const completedTab = screen.getByText('Completed');
    fireEvent.click(completedTab);

    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
  });

  it('should call onDelete for completed todos when "Clear completed" is clicked', () => {
    const onDelete = jest.fn();
    render(
      <TodoList todos={todos} onToggle={() => {}} onDelete={onDelete} />
    );

    const clearButton = screen.getByText('Clear completed');
    fireEvent.click(clearButton);

    expect(onDelete).toHaveBeenCalledWith('2');
  });
});