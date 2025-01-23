 
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Switch, FormControlLabel, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';  
import { AddTodo } from './components/AddTodo/AddTodo';
import { TodoList } from './components/TodoList/TodoList';
import { useTodos } from './hooks/useTodos';
import { lightTheme, darkTheme } from './theme';
import './i18n';  

export const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t, i18n } = useTranslation();  

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);  
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>{t('todos')}</h1> 
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              onClick={() => changeLanguage('en')}
              sx={{ textTransform: 'none' }}
            >
              EN
            </Button>
            <Button
              variant="outlined"
              onClick={() => changeLanguage('ru')}
              sx={{ textTransform: 'none' }}
            >
              RU
            </Button>
            <FormControlLabel
              control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
              label={t('darkMode')} 
            />
          </Box>
        </Box>
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </Box>
    </ThemeProvider>
  );
};