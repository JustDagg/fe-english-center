import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  Button,
  alpha,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material';
import type {
  Theme,
  SxProps
} from '@mui/material';
import { Link } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';
import CreateIcon from '@mui/icons-material/Create';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

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
    color: "orange"
  } as SxProps<Theme>,
  body: {
    fontSize: '0.95rem',
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
  sectionTitle: {
    fontWeight: 800,
    mb: 2,
    color: '#0f172a',
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    fontSize: '1.5rem',
  } as SxProps<Theme>,
  vocabCard: (color: string): SxProps<Theme> => ({
    p: 4,
    borderRadius: 6,
    background: '#fff',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    height: '100%',
    '&:hover': {
      transform: 'translateY(-10px)',
      borderColor: alpha(color, 0.4),
      boxShadow: `0 20px 25px -5px ${alpha(color, 0.1)}, 0 10px 10px -5px ${alpha(color, 0.05)}`,
      cursor: 'pointer',
    },
  }),
  grammarBox: {
    p: 5,
    borderRadius: 8,
    bgcolor: '#f0fdf4',
    border: '2px dashed #10b981',
    mt: 6,
  } as SxProps<Theme>,
};

const Hero: React.FC = () => (
  <Box sx={styles.hero}>
    <Container maxWidth="md">
      <Typography variant="overline" sx={styles.overline}>
        UNIT 1: LESSON 1
      </Typography>
      <Typography variant="h4" sx={styles.title}>
        MY NEW <span style={{ color: '#facc15' }}>SCHOOL</span>
      </Typography>
      <Typography variant="h5" sx={styles.subtitle}>
        Introducing a Friend
      </Typography>
      <Typography variant="body1" sx={styles.body}>
        Welcome to your first lesson! Today we will learn how to introduce friends and use the verb 'to be' correctly.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<PlayArrowIcon />}
          component={Link}
          to="/project"
          sx={styles.primaryButton}
        >
          Go to school life project
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

const PresentationSection: React.FC = () => (
  <Box sx={{ mb: 8 }}>
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
        Lesson Presentation
      </Typography>
      <Typography variant="body1" sx={{ color: '#64748b', maxWidth: '800px', mx: 'auto' }}>
        Explore the lesson content and find key vocabulary/expressions for today's lesson. Feel free to use the slides to help you.
      </Typography>
    </Box>
    <Paper
      elevation={4}
      sx={{
        overflow: 'hidden',
        borderRadius: 6,
        border: '1px solid #e2e8f0',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
      }}
    >
      <Box sx={{
        bgcolor: '#4f46e5',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#fff'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <OndemandVideoIcon sx={{ fontSize: 24 }} />
          <Typography variant="subtitle2" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
            Group 4 - Lesson Slides: Introducing a Friend
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: alpha('#fff', 0.2),
            backdropFilter: 'blur(4px)',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 700,
            '&:hover': { bgcolor: alpha('#fff', 0.3) }
          }}
        >
          PowerPoint
        </Button>
      </Box>

      <Box
        sx={{
          position: 'relative',
          paddingTop: '56.25%',
          width: '100%',
          bgcolor: '#000'
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          src="https://www.youtube.com/embed/P5hAPGtS78I"
          title="Lesson Slides"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Paper>
  </Box>
);

const WatchSection: React.FC = () => (
  <Box sx={{ mb: 10 }}>
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
        Watch & Listen
      </Typography>
      <Typography variant="body1" sx={{ color: '#64748b', maxWidth: '800px', mx: 'auto' }}>
        Watch this short video to hear the perfect pronunciation and see how related these expressions are used in daily life.
      </Typography>
    </Box>
    <Paper
      elevation={4}
      sx={{
        overflow: 'hidden',
        borderRadius: 6,
        border: '1px solid #e2e8f0',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
      }}
    >
      <Box sx={{
        bgcolor: '#db2777',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#fff'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <OndemandVideoIcon sx={{ fontSize: 24 }} />
          <Typography variant="subtitle2" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
            Group 4 - Video / Dialogue Video
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: alpha('#fff', 0.2),
            backdropFilter: 'blur(4px)',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 700,
            '&:hover': { bgcolor: alpha('#fff', 0.3) }
          }}
        >
          Video Introduction
        </Button>
      </Box>

      <Box
        sx={{
          position: 'relative',
          paddingTop: '56.25%',
          width: '100%',
          bgcolor: '#000'
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          src="https://www.youtube.com/embed/0b1sPJq1BaA"
          title="Watch & Listen"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Paper>
  </Box>
);

const ContentSection: React.FC = () => (
  <Grid container spacing={6} sx={{ mb: 10 }}>
    <Grid size={{ xs: 12, md: 6 }}>
      <Typography variant="h4" sx={styles.sectionTitle}>
        <BookIcon color="primary" fontSize="large" /> 1. Vocabulary
      </Typography>
      <Card sx={styles.vocabCard('#10b981')} elevation={0}>
        <List sx={{ p: 0 }}>
          {['Introduce', 'Friend', 'New school', 'Classmate', 'Sharing', 'Compassion'].map((word, idx) => (
            <ListItem key={idx} sx={{ py: 1.5, borderBottom: '1px solid #f1f5f9' }}>
              <ListItemIcon>
                <PlayCircleFilledWhiteIcon sx={{ color: '#10b981' }} />
              </ListItemIcon>
              <ListItemText
                primary={word}
                primaryTypographyProps={{ fontWeight: 700, fontSize: '1.1rem', color: '#1e293b' }}
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </Grid>

    <Grid size={{ xs: 12, md: 6 }}>
      <Typography variant="h4" sx={styles.sectionTitle}>
        <CreateIcon color="primary" fontSize="large" /> 2. Grammar Focus
      </Typography>
      <Box sx={styles.grammarBox}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: '#065f46' }}>
          Verb "to be" (Am/Is/Are)
        </Typography>
        <Typography variant="body1" sx={{ color: '#047857', fontSize: '1.1rem', mb: 4, lineHeight: 1.8 }}>
          Use the verb <strong>to be</strong> to introduce people and describe basic information:
        </Typography>
        <ul style={{ color: '#065f46', fontSize: '1.1rem', lineHeight: '2' }}>
          <li>I <strong>am</strong> Duc.</li>
          <li>This <strong>is</strong> my friend, Vy.</li>
          <li>We <strong>are</strong> in Grade 6.</li>
        </ul>
      </Box>
    </Grid>
  </Grid>
);

const LessonPage: React.FC = () => (
  <Box
    sx={{
      pb: 6,
      bgcolor: '#f1f5f9',
      minHeight: '100vh'
    }}
  >
    <Hero />
    <Container maxWidth="lg">
      <PresentationSection />
      <WatchSection />
      <ContentSection />
      <BackButton />
    </Container>
  </Box>
);

export default LessonPage;
