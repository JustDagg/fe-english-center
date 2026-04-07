import React from 'react';
import { Box, Button } from '@mui/material';
import type { Theme, SxProps } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const styles = {
  container: {
    mt: 6,
    textAlign: 'center',
  } as SxProps<Theme>,
  button: {
    borderRadius: 4,
    px: 6,
    py: 2,
    bgcolor: '#1e293b',
    color: '#fff',
    fontWeight: 700,
    textTransform: 'none',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      bgcolor: '#0f172a',
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
    },
  } as SxProps<Theme>,
};

const BackButton: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Button
        startIcon={<ArrowBackIcon />}
        variant="contained"
        component={Link}
        to="/home"
        sx={styles.button}
      >
        Back home
      </Button>
    </Box>
  );
};

export default BackButton;
