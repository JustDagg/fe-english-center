import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  alpha,
  styled,
} from '@mui/material';
import type {
  Theme,
  SxProps
} from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';

const styles = {
  appBar: {
    borderBottom: '1px solid rgba(0,0,0,0.08)',
    backgroundColor: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: (theme: Theme) => theme.zIndex.appBar,
  } as SxProps<Theme>,
  toolbar: {
    justifyContent: 'space-between',
    minHeight: '80px !important',
  } as SxProps<Theme>,
  logo: {
    fontWeight: 800,
    color: '#334155',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  } as SxProps<Theme>,
  navBox: {
    display: { xs: 'none', md: 'flex' },
    gap: 1,
  } as SxProps<Theme>,
  searchActionBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  } as SxProps<Theme>,
  closeButton: {
    display: { xs: 'none', sm: 'inline-flex' },
  } as SxProps<Theme>,
};

const NavLink = styled(RouterNavLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 600,
  fontSize: '0.9rem',
  padding: '8px 16px',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  borderBottom: '2px solid transparent',
  lineHeight: '32px',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },
  '&.active': {
    color: theme.palette.primary.main,
    borderBottomColor: theme.palette.primary.main,
  }
}));

const Header: React.FC = () => {
  return (
    <AppBar sx={styles.appBar} color="default" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={styles.toolbar}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              sx={styles.logo}
              component={RouterNavLink}
              to="/home"
            >
              English 6 - Unit 1
            </Typography>
          </Box>

          <Box sx={styles.navBox}>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">Getting to know you</NavLink>
            <NavLink to="/lesson">Virtual Lesson</NavLink>
            <NavLink to="/project">School Life Project</NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
