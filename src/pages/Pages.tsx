import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import type { Theme, SxProps } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    py: 10,
    textAlign: 'center',
  } as SxProps<Theme>,
  title: {
    fontWeight: 800,
  } as SxProps<Theme>,
  lessonContainer: {
    py: 10,
  } as SxProps<Theme>,
  lessonBox: {
    p: 4,
    bgcolor: '#f0f9ff',
    borderRadius: 4,
    mt: 4,
    textAlign: 'left',
  } as SxProps<Theme>,
};

const AboutPage: React.FC = () => (
    <Container sx={styles.container}>
        <Typography variant="h2" sx={styles.title} gutterBottom>About English 6</Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
            This program is designed to help students learn English in an interactive and fun way, focusing on communication and real-world skills.
        </Typography>
        <Button variant="contained" component={Link} to="/home">Back to Home</Button>
    </Container>
);

export const LessonPage: React.FC = () => (
    <Container sx={styles.lessonContainer}>
        <Typography variant="h2" sx={styles.title} gutterBottom>English Lesson: Unit 1</Typography>
        <Typography variant="h4" color="primary" gutterBottom>Lesson 1: Introducing a Friend</Typography>
        <Box sx={styles.lessonBox}>
            <Typography variant="h6">Key Vocabulary:</Typography>
            <ul>
                <li>Introduce</li>
                <li>Friend</li>
                <li>New school</li>
                <li>Classmate</li>
            </ul>
        </Box>
        <Button variant="outlined" component={Link} to="/home" sx={{ mt: 4 }}>Back home</Button>
    </Container>
);

export const PracticePage: React.FC = () => (
    <Container sx={styles.container}>
        <Typography variant="h2" sx={styles.title} gutterBottom>Interactive Practice</Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>Coming soon: Quizzes, games, and listening exercises!</Typography>
        <Button variant="contained" component={Link} to="/home">Return Home</Button>
    </Container>
);

export default AboutPage;
