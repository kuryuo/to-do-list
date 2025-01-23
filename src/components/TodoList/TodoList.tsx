import { useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { Todo } from '../../types/todo';
import { List, Typography, Tabs, Tab, Box, Button } from '@mui/material';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  const filteredTodos =
    filter === 'active'
      ? incompleteTodos
      : filter === 'completed'
      ? completedTodos
      : todos;

  const handleClearCompleted = () => {
    completedTodos.forEach((todo) => onDelete(todo.id));
  };

  return (
    <Box>
      <List>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </List>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Typography variant="body2" sx={{ color: '#757575' }}>
          {incompleteTodos.length} items left
        </Typography>

        <Tabs
          value={filter}
          onChange={(_, newValue) => setFilter(newValue)}
          sx={{
            '& .MuiTab-root': {
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#64b5f6', 
              },
            },
          }}
        >
          <Tab label="All" value="all" />
          <Tab label="Active" value="active" />
          <Tab label="Completed" value="completed" />
        </Tabs>

        <Button
          variant="outlined"
          onClick={handleClearCompleted}
          sx={{
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#e57373', 
              color: '#fff',
              transform: 'scale(1.05)', 
            },
          }}
        >
          Clear completed
        </Button>
      </Box>
    </Box>
  );
};