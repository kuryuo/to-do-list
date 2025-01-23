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
        borderBottom: '1px solid #e0e0e0',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#f5f5f5', 
          transform: 'translateX(5px)', 
        },
      }}
    >
      <Checkbox
        checked={completed}
        onChange={() => onToggle(id)}
        sx={{
          color: '#90caf9', 
          '&.Mui-checked': {
            color: '#64b5f6', 
          },
        }}
      />
      <Typography
        sx={{
          flexGrow: 1,
          textDecoration: completed ? 'line-through' : 'none',
          color: completed ? '#9e9e9e' : 'inherit',
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
            color: '#e57373', 
            transform: 'scale(1.2)', 
          },
        }}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};