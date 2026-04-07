import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  alpha,
  styled,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { NavLink as RouterNavLink } from 'react-router-dom';

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Getting to know you', path: '/about' },
    { label: 'Virtual Lesson', path: '/lesson' },
    { label: 'School Life Project', path: '/project' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3, gap: 1 }}>
        <AutoStoriesIcon sx={{ color: '#4c1d95' }} />
        <Typography variant="h6" sx={{ fontWeight: 800, color: '#1e293b' }}>
          ENGLISH CENTER
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={RouterNavLink}
            to={item.path}
            sx={{
              borderRadius: '12px',
              mb: 1,
              '&.active': {
                bgcolor: alpha('#4c1d95', 0.1),
                color: '#4c1d95',
              }
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontWeight: 700 }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: alpha('#fff', 0.9),
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          height: '80px',
          justifyContent: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 1100
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, md: 2 } }}>
            <Box
              component={RouterNavLink}
              to="/home"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.02)' }
              }}
            >
              <Box sx={{
                width: 42,
                height: 42,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(76, 29, 149, 0.2)'
              }}>
                <AutoStoriesIcon sx={{ color: '#fff', fontSize: 24 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                  letterSpacing: '-0.5px',
                  background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                ENGLISH CENTER
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, items: 'center', gap: 0.5 }}>
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path}>
                  {item.label}
                </NavLink>
              ))}
              <Button
                variant="contained"
                sx={{
                  ml: 2,
                  borderRadius: '12px',
                  bgcolor: '#1e293b',
                  color: '#fff',
                  px: 3,
                  fontWeight: 700,
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#0f172a' }
                }}
              >
                Get Started
              </Button>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: '#1e293b' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, borderRadius: '0 20px 20px 0' },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
