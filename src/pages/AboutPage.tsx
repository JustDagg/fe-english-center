import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  alpha,
  Avatar,
  Paper
} from '@mui/material';
import type {
  Theme,
  SxProps
} from '@mui/material';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HomeIcon from '@mui/icons-material/Home';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

import BackButton from '../components/BackButton';

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #4c1d95 0%, #1e1b4b 100%)',
    minHeight: '400px',
    pt: 8,
    pb: 8,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    mb: 10,
  } as SxProps<Theme>,
  overline: {
    fontWeight: 800,
    mb: 2,
    display: 'block',
    color: alpha('#fff', 0.8),
    letterSpacing: 2,
  } as SxProps<Theme>,
  title: {
    fontWeight: 800,
    mb: 1,
    textShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textTransform: 'uppercase',
  } as SxProps<Theme>,
  subtitle: {
    fontSize: { xs: '1.2rem', md: '1.8rem' },
    fontWeight: 600,
    mb: 2,
  } as SxProps<Theme>,
  body: {
    fontSize: '0.95rem',
    mb: 4,
    color: alpha('#fff', 0.8),
    mx: 'auto',
    maxWidth: '600px',
    lineHeight: 1.6,
  } as SxProps<Theme>,
  chatBubble: (isMe: boolean): SxProps<Theme> => ({
    p: 2,
    borderRadius: isMe ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
    bgcolor: isMe ? '#4f46e5' : '#fff',
    color: isMe ? '#fff' : '#1e293b',
    maxWidth: '80%',
    mb: 2,
    alignSelf: isMe ? 'flex-end' : 'flex-start',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
    border: isMe ? 'none' : '1px solid #e2e8f0',
  }),
  card: (color: string): SxProps<Theme> => ({
    height: '100%',
    p: 1,
    borderRadius: 4,
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    backgroundColor: '#fff',
    '&:hover': {
      transform: 'translateY(-10px)',
      borderColor: alpha(color, 0.4),
      boxShadow: `0 20px 25px -5px ${alpha(color, 0.1)}, 0 10px 10px -5px ${alpha(color, 0.05)}`,
      cursor: 'pointer',
    },
  }),
  avatar: (color: string): SxProps<Theme> => ({
    bgcolor: alpha(color, 0.1),
    color: color,
    width: 60,
    height: 60,
    mb: 3,
  }),
};

const assessmentCriteria = [
  {
    title: "Content",
    desc: "Clearly structured content that covers all parts of the introduction task.",
    color: '#7c3aed'
  },
  {
    title: "Fluency",
    desc: "Flows naturally with good rhythm, intonation and sentence stress.",
    color: '#0ea5e9'
  },
  {
    title: "Interaction",
    desc: "Engages with the listener, using eye contact and natural body language.",
    color: '#10b981'
  },
  {
    title: "Creativity",
    desc: "Uses creative elements like props or visuals to enhance the presentation.",
    color: '#f59e0b'
  },
];

const Hero: React.FC = () => (
  <Box sx={styles.hero}>
    <Container maxWidth="md">
      <Typography variant="overline" sx={styles.overline}>
        INTRODUCTION
      </Typography>
      <Typography variant="h4" sx={styles.title}>
        GETTING TO <span style={{ color: '#facc15' }}>KNOW YOU</span>
      </Typography>
      <Typography variant="h5" sx={styles.subtitle}>
        Learn the Basics 👋
      </Typography>
      <Typography variant="body1" sx={styles.body}>
        Master the art of introducing yourself and your friends with confidence.
        Follow our dialogue guides and speaking tips.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<PlayArrowIcon />}
          component={Link}
          to="/lesson"
          sx={{ bgcolor: '#facc15', color: '#1e293b', '&:hover': { bgcolor: '#eab308' } }}
        >
          Go to virtual lesson
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<HomeIcon />}
          component={Link}
          to="/home"
          sx={{ color: '#fff', borderColor: '#fff', '&:hover': { bgcolor: alpha('#fff', 0.1), borderColor: '#fff' } }}
        >
          Back home
        </Button>
      </Box>
    </Container>
  </Box>
);

const WatchSection: React.FC = () => (
  <Box sx={{ mb: 8 }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
        Watch How It's Done
      </Typography>
      <Typography variant="body1" sx={{ color: '#64748b' }}>
        Example dialogue of students meeting for the first time.
      </Typography>
    </Box>
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 8,
        bgcolor: '#f8fafc',
        border: '1px solid #e2e8f0',
        maxWidth: '600px',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={styles.chatBubble(false)}>
        <Typography variant="body1">Hi! My name is Minh. What's your name?</Typography>
      </Box>
      <Box sx={styles.chatBubble(true)}>
        <Typography variant="body1">Hi Minh! I'm Vy. Nice to meet you.</Typography>
      </Box>
      <Box sx={styles.chatBubble(false)}>
        <Typography variant="body1">Nice to meet you too! Do you like our new school?</Typography>
      </Box>
      <Box sx={styles.chatBubble(true)}>
        <Typography variant="body1">Yes, I do. It's very big and modern.</Typography>
      </Box>
    </Paper>
  </Box>
);

const SpeakSection: React.FC = () => (
  <Box sx={{ mb: 8 }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
        Practise Speaking
      </Typography>
      <Typography variant="body1" sx={{ color: '#64748b' }}>
        How you will be assessed on your speaking performance.
      </Typography>
    </Box>
    <Grid container spacing={4}>
      {assessmentCriteria.map((item, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
          <Card sx={styles.card(item.color)} elevation={0}>
            <CardContent>
              <Avatar sx={styles.avatar(item.color)}>
                <RecordVoiceOverIcon />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: '#1e293b' }}>
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
  </Box>
);

const AboutPage: React.FC = () => (
  <Box
    sx={{
      pb: 6,
      bgcolor: '#f1f5f9',
      minHeight: '100vh'
    }}
  >
    <Hero />
    <Container maxWidth="lg">
      <WatchSection />
      <SpeakSection />
      <BackButton />
    </Container>
  </Box>
);

export default AboutPage;
