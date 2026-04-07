import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, alpha } from '@mui/material';
import type { Theme, SxProps } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const styles = {
  section: {
    py: 8,
    textAlign: 'center',
    backgroundColor: '#5b21b6',
    color: '#fff',
  } as SxProps<Theme>,
  tag: {
    fontWeight: 800,
    mb: 2,
    display: 'inline-block',
    backgroundColor: alpha('#fff', 0.1),
    px: 2,
    py: 0.5,
    borderRadius: 1,
    color: alpha('#fff', 0.9),
    letterSpacing: 2,
  } as SxProps<Theme>,
  title: {
    fontWeight: 800,
    mb: 1,
    fontSize: { xs: '2rem', md: '3rem' },
  } as SxProps<Theme>,
  description: {
    color: alpha('#fff', 0.7),
    mb: 6,
  } as SxProps<Theme>,
  card: (_color: string): SxProps<Theme> => ({
    backgroundColor: alpha('#fff', 0.05),
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      backgroundColor: alpha('#fff', 0.1),
    },
    height: '100%',
  }),
  iconWrapper: (color: string): SxProps<Theme> => ({
    width: 48,
    height: 48,
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: alpha(color, 0.2),
    color: color,
    mb: 2,
  }),
};

const questions = [
  { icon: <BadgeIcon />, question: "What's your name?", answer: "My name is...", color: '#4f46e5' },
  { icon: <CalendarMonthIcon />, question: "How old are you?", answer: "I'm ... years old", color: '#0ea5e9' },
  { icon: <LocationOnIcon />, question: "Where are you from?", answer: "I'm from...", color: '#f59e0b' },
  { icon: <SchoolIcon />, question: "What school do you go to?", answer: "I go to ... school", color: '#ef4444' },
  { icon: <StarIcon />, question: "What's your favorite subject?", answer: "My favorite subject is ...", color: '#10b981' },
  { icon: <SportsEsportsIcon />, question: "What do you like to do?", answer: "I like to ... / I enjoy ...", color: '#8b5cf6' },
  { icon: <DirectionsRunIcon />, question: "This is my friend...", answer: "Nice to meet you", color: '#ec4899' },
  { icon: <SentimentVerySatisfiedIcon />, question: "Nice to meet you, too!", answer: "Let's be friends!", color: '#6366f1' },
];

const QASection: React.FC = () => {
  return (
    <Box sx={styles.section}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={styles.tag}>
          KEY LANGUAGE
        </Typography>
        <Typography variant="h2" sx={styles.title}>
          Useful Questions & Answers
        </Typography>
        <Typography variant="body1" sx={styles.description}>
          These questions and answers part help you get to know a new friend in English.
        </Typography>

        <Grid container spacing={4}>
          {questions.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card sx={styles.card(item.color)}>
                <CardContent sx={{ textAlign: 'left', p: 3 }}>
                  <Box sx={styles.iconWrapper(item.color)}>
                    {item.icon}
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                    {item.question}
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.6) }}>
                    {item.answer}
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

export default QASection;
