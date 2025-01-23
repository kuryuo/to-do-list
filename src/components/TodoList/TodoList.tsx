import { useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { Todo } from '../../types/todo';
import { List, Typography, Tabs, Tab, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';  

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const { t } = useTranslation();  

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
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {t('itemsLeft', { count: incompleteTodos.length })} 
        </Typography>

        <Tabs
          value={filter}
          onChange={(_, newValue) => setFilter(newValue)}
          sx={{
            '& .MuiTab-root': {
              color: 'text.secondary',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
              },
              '&.Mui-selected': {
                color: 'primary.main',
              },
            },
          }}
        >
          <Tab label={t('all')} value="all" /> 
          <Tab label={t('active')} value="active" /> 
          <Tab label={t('completed')} value="completed" />
        </Tabs>

        <Button
          variant="outlined"
          onClick={handleClearCompleted}
          sx={{
            color: 'text.secondary',
            borderColor: 'divider',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'error.main',
              color: 'background.paper',
              borderColor: 'error.main',
              transform: 'scale(1.05)',
            },
          }}
        >
          {t('clearCompleted')}
        </Button>
      </Box>
    </Box>
  );
};