import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  alpha,
  Avatar,
} from '@mui/material';
import type { Theme, SxProps } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GamepadIcon from '@mui/icons-material/Gamepad';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { Link } from 'react-router-dom';

const styles = {
  section: {
    py: 10,
    bgcolor: '#f1f5f9',
  } as SxProps<Theme>,
  tag: {
    fontWeight: 800,
    mb: 1.5,
    display: 'inline-block',
    backgroundColor: '#e2e8f0',
    px: 2.5,
    py: 0.75,
    borderRadius: 2,
    color: '#334155',
    letterSpacing: 2.5,
  } as SxProps<Theme>,
  title: {
    fontWeight: 800,
    mb: 1.5,
    color: '#0f172a',
    fontSize: { xs: '2rem', md: '3.5rem' },
  } as SxProps<Theme>,
  description: {
    color: '#64748b',
    fontSize: '1.1rem',
  } as SxProps<Theme>,
  card: (color: string): SxProps<Theme> => ({
    backgroundColor: '#fff',
    textDecoration: 'none',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    '&:hover': {
      borderColor: alpha(color, 0.4),
      transform: 'translateY(-10px)',
      boxShadow: `0 20px 25px -5px ${alpha(color, 0.1)}, 0 10px 10px -5px ${alpha(color, 0.05)}`,
    },
    height: '100%',
    cursor: 'pointer',
    borderRadius: 4,
    padding: 1,
    display: 'block',
  }),
  avatar: (color: string): SxProps<Theme> => ({
    width: 72,
    height: 72,
    mx: 'auto',
    mb: 2.5,
    backgroundColor: alpha(color, 0.1),
    color: color,
    fontSize: '2.5rem',
  }),
};

const exploreItems = [
  {
    icon: <EmojiPeopleIcon />,
    title: "Getting to Know You",
    desc: "Warm-up activities to meet classmates.",
    color: '#3b82f6',
    to: '/about'
  },
  {
    icon: <MenuBookIcon />,
    title: "Lesson",
    desc: "Core vocabulary & grammar lessons.",
    color: '#10b981',
    to: '/lesson'
  },
  {
    icon: <GamepadIcon />,
    title: "Practice",
    desc: "Interactive exercises and learning games.",
    color: '#f59e0b',
    to: '/practice'
  },
  {
    icon: <AssignmentIcon />,
    title: "Project & Homework",
    desc: "Creative tasks and assignments.",
    color: '#ef4444',
    to: '/project'
  },
  {
    icon: <GroupsIcon />,
    title: "About Us",
    desc: "Learn more about the English program.",
    color: '#8b5cf6',
    to: '/about'
  },
];

const ExploreSection: React.FC = () => {
  return (
    <Box sx={styles.section}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={styles.tag}>
            NAVIGATE
          </Typography>
          <Typography variant="h2" sx={styles.title}>
            Explore the Unit
          </Typography>
          <Typography variant="body1" sx={styles.description}>
            Choose a section to jump into your learning journey
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {exploreItems.map((item, index) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: index < 4 ? 3 : 3
              }}
              key={index}
            >
              <Card
                component={Link}
                to={item.to}
                sx={styles.card(item.color)}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Avatar sx={styles.avatar(item.color)}>
                    {item.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#1e293b' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExploreSection;
