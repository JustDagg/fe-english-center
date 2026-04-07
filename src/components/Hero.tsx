import React from 'react';
import { Box, Typography, Button, Container, alpha } from '@mui/material';
import type { Theme, SxProps } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from 'react-router-dom';

const styles = {
  heroOuter: {
    background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
    minHeight: '400px',
    pt: 8,
    pb: 8,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  } as SxProps<Theme>,
  overline: {
    fontWeight: 800,
    mb: 2,
    display: 'block',
    color: alpha('#fff', 0.8),
    letterSpacing: 2,
  } as SxProps<Theme>,
  title: {
    fontSize: { xs: '2.5rem', md: '4rem' },
    fontWeight: 800,
    mb: 1,
    textShadow: '0 4px 12px rgba(0,0,0,0.1)',
  } as SxProps<Theme>,
  subtitle: {
    fontSize: { xs: '1.5rem', md: '2.5rem' },
    fontWeight: 600,
    mb: 3,
  } as SxProps<Theme>,
  body: {
    fontSize: '1.1rem',
    mb: 4,
    color: alpha('#fff', 0.8),
    mx: 'auto',
    maxWidth: '600px',
    lineHeight: 1.6,
  } as SxProps<Theme>,
  buttonContainer: {
    display: 'flex',
    gap: 2,
    justifyContent: 'center',
  } as SxProps<Theme>,
  primaryButton: {
    backgroundColor: '#facc15',
    color: '#1e293b',
    '&:hover': {
      backgroundColor: '#eab308',
    },
  } as SxProps<Theme>,
  secondaryButton: {
    borderColor: '#fff',
    color: '#fff',
    '&:hover': {
      backgroundColor: alpha('#fff', 0.1),
      borderColor: '#fff',
    },
  } as SxProps<Theme>,
};

const Hero: React.FC = () => {
  return (
    <Box sx={styles.heroOuter}>
      <Container maxWidth="md">
        <Typography variant="overline" sx={styles.overline}>
          TOPIC 1: INTRODUCING A FRIEND
        </Typography>
        <Typography variant="h1" sx={styles.title}>
          UNIT 1: <span style={{ color: '#facc15' }}>MY NEW SCHOOL</span>
        </Typography>
        <Typography variant="h3" sx={styles.subtitle}>
          Introducing a Friend 👋
        </Typography>
        <Typography variant="body1" sx={styles.body}>
          Learn helpful vocabulary and grammar to introduce your friends at your new school. Practice with our interactive exercises.
        </Typography>

        <Box sx={styles.buttonContainer}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<PlayArrowIcon />}
            component={Link}
            to="/lesson"
            sx={styles.primaryButton}
          >
            Start Learning
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<HelpOutlineIcon />}
            component={Link}
            to="/about"
            sx={styles.secondaryButton}
          >
            View Tutorial
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
