import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';  

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const { t } = useTranslation();  

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
        placeholder={t('addPlaceholder')}
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
            '& fieldset': {
              borderColor: 'divider',
            },
          },
          '& .MuiInputBase-input': {
            color: 'text.primary',
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
            backgroundColor: 'primary.dark',
            transform: 'scale(1.05)',
          },
        }}
      >
        {t('addButton')}
      </Button>
    </Box>
  );
};