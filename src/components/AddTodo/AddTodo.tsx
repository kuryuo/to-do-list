import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        gap: 2,
        mb: 4,
        transition: 'all 0.3s ease',
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Add new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#90caf9', 
            },
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#64b5f6', 
            transform: 'scale(1.05)', 
          },
        }}
      >
        ADD
      </Button>
    </Box>
  );
};