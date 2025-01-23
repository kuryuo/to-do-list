 import React from 'react';
import { Checkbox, Typography, IconButton, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <ListItem
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',  
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'action.hover',  
          transform: 'translateX(5px)',
        },
      }}
    >
      <Checkbox
        checked={completed}
        onChange={() => onToggle(id)}
        sx={{
          color: 'primary.main',  
          '&.Mui-checked': {
            color: 'primary.main',
          },
        }}
      />
      <Typography
        sx={{
          flexGrow: 1,
          textDecoration: completed ? 'line-through' : 'none',
          color: completed ? 'text.secondary' : 'text.primary',  
          transition: 'all 0.3s ease',
        }}
      >
        {text}
      </Typography>
      <IconButton
        onClick={() => onDelete(id)}
        sx={{
          transition: 'all 0.3s ease',
          '&:hover': {
            color: 'error.main',  
            transform: 'scale(1.2)',
          },
        }}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};