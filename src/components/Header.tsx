import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  alpha,
  styled,
  Button,
} from '@mui/material';
import type { Theme, SxProps } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { NavLink as RouterNavLink } from 'react-router-dom';

const styles = {
  appBar: {
    backgroundColor: alpha('#fff', 0.9),
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
    height: '80px',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1100
  } as SxProps<Theme>,
  toolbar: {
    justifyContent: 'space-between',
    px: { xs: 0, md: 2 }
  } as SxProps<Theme>,
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
    '&:hover': { transform: 'scale(1.02)' }
  } as SxProps<Theme>,
  logoIconBox: {
    width: 42,
    height: 42,
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(76, 29, 149, 0.2)'
  } as SxProps<Theme>,
  logoText: {
    fontWeight: 900,
    letterSpacing: '-0.5px',
    background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: { xs: 'none', sm: 'block' }
  } as SxProps<Theme>,
  navBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5
  } as SxProps<Theme>,
  ctaButton: {
    ml: 2,
    borderRadius: '12px',
    bgcolor: '#1e293b',
    color: '#fff',
    px: 3,
    fontWeight: 700,
    textTransform: 'none',
    '&:hover': { bgcolor: '#0f172a' }
  } as SxProps<Theme>,
};

const NavLink = styled(RouterNavLink)(() => ({
  color: '#475569',
  fontWeight: 600,
  fontSize: '0.95rem',
  padding: '8px 20px',
  textDecoration: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  '&:hover': {
    color: '#4c1d95',
    backgroundColor: alpha('#4c1d95', 0.05),
  },
  '&.active': {
    color: '#4c1d95',
    backgroundColor: alpha('#4c1d95', 0.08),
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '6px',
      left: '20px',
      right: '20px',
      height: '3px',
      backgroundColor: '#4c1d95',
      borderRadius: '2px',
    }
  }
}));

const Header: React.FC = () => {
  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Lesson', path: '/lesson' },
    { label: 'Project', path: '/project' },
  ];

  return (
    <AppBar elevation={0} sx={styles.appBar}>
      <Container maxWidth="lg">
        <Toolbar sx={styles.toolbar}>
          <Box
            component={RouterNavLink}
            to="/home"
            sx={styles.logoWrapper}
          >
            <Box sx={styles.logoIconBox}>
              <AutoStoriesIcon sx={{ color: '#fff', fontSize: 24 }} />
            </Box>
            <Typography variant="h6" sx={styles.logoText}>
              ENGLISH CENTER
            </Typography>
          </Box>

          <Box sx={styles.navBox}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path}>
                  {item.label}
                </NavLink>
              ))}
            </Box>
            <Button
              variant="contained"
              sx={styles.ctaButton}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
