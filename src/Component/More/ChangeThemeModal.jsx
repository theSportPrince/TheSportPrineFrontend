
import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ChatState } from '../../Context/ChatProvider';

function ChangeThemeModal() {
  const { themeMode, toggleTheme } = ChatState();

  const handleThemeChange = (mode) => {
    toggleTheme(); // Toggle theme in context
  };

  useEffect(() => {
    document.body.classList.toggle('light', themeMode === 'light');
  }, [themeMode]);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Select Theme
      </Typography>
      <Button
        variant={themeMode === 'light' ? 'contained' : 'outlined'}
        color="primary"
        onClick={() => handleThemeChange('light')}
        sx={{ mr: 2 }}
      >
        Light Theme
      </Button>
      <Button
        variant={themeMode === 'dark' ? 'contained' : 'outlined'}
        color="primary"
        onClick={() => handleThemeChange('dark')}
      >
        Dark Theme
      </Button>
    </Box>
  );
}

export default ChangeThemeModal;