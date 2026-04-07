import React from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Button,
    alpha,
    Paper,
    Avatar,
    Checkbox,
    FormControlLabel,
    FormGroup
} from '@mui/material';
import type { Theme, SxProps } from '@mui/material';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VideocamIcon from '@mui/icons-material/Videocam';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import MicIcon from '@mui/icons-material/Mic';
import ShareIcon from '@mui/icons-material/Share';

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
    padletSection: {
        bgcolor: '#4c1d95',
        color: '#fff',
        borderRadius: 8,
        p: { xs: 4, md: 8 },
        mb: 10,
        position: 'relative',
        overflow: 'hidden',
    } as SxProps<Theme>,
    stepCircle: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        bgcolor: '#facc15',
        color: '#1e293b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 800,
        fontSize: '1.2rem',
        flexShrink: 0,
    } as SxProps<Theme>,
    taskCard: {
        bgcolor: alpha('#fff', 0.95),
        borderRadius: 6,
        p: 4,
        color: '#1e293b',
        height: '100%',
        border: '1px solid #e2e8f0',
    } as SxProps<Theme>,
    proTip: {
        bgcolor: alpha('#facc15', 0.1),
        borderLeft: '4px solid #facc15',
        p: 4,
        borderRadius: 2,
        mt: 8,
        textAlign: 'center',
        mb: 2
    } as SxProps<Theme>,
};

const Hero: React.FC = () => (
    <Box sx={styles.hero}>
        <Container maxWidth="md">
            <Typography variant="overline" sx={styles.overline}>
                HOMEWORK & PROJECT
            </Typography>
            <Typography variant="h4" sx={styles.title}>
                SCHOOL LIFE <span style={{ color: '#facc15' }}>PROJECT</span> 📝
            </Typography>
            <Typography variant="h5" sx={styles.subtitle}>
                Unit 1: My New School 🏫
            </Typography>
            <Typography variant="body1" sx={styles.body}>
                Apply your English skills by creating a personal video introduction and sharing it with your classmates on Padlet.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<PlayArrowIcon />}
                    component={Link}
                    to="/home"
                    sx={{ bgcolor: '#facc15', color: '#1e293b', '&:hover': { bgcolor: '#eab308' } }}
                >
                    Go to Home
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

const VideoTaskSection: React.FC = () => (
    <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 1.5, textAlign: 'center' }}>
            Video Introduction
        </Typography>
        <Typography variant="body1" sx={{ color: '#64748b', textAlign: 'center', mb: 6 }}>
            Now that you've practiced in class, it's time to show off your speaking skills!
        </Typography>

        <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{
                    position: 'relative',
                    width: '300px',
                    height: '300px',
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Box sx={{
                        position: 'absolute',
                        width: '220px',
                        height: '220px',
                        borderRadius: '50%',
                        bgcolor: alpha('#7c3aed', 0.2),
                        filter: 'blur(30px)',
                    }} />

                    <Box sx={{
                        width: '180px',
                        height: '180px',
                        background: 'linear-gradient(180deg, #9333ea 0%, #db2777 100%)',
                        borderRadius: '60px 60px 50px 50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
                        zIndex: 2,
                    }}>
                        <VideocamIcon sx={{ fontSize: 80, color: alpha('#fff', 0.9) }} />
                    </Box>

                    <Box sx={{
                        position: 'absolute',
                        left: -20,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        zIndex: 3
                    }}>
                        <Box sx={{ width: 12, height: 12, bgcolor: '#64748b', borderRadius: '2px' }} />
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#475569' }}>Record</Typography>
                    </Box>

                    <Box sx={{
                        position: 'absolute',
                        top: 40,
                        right: -10,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        zIndex: 3
                    }}>
                        <MicIcon sx={{ fontSize: 16, color: '#64748b' }} />
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#475569' }}>Speak!</Typography>
                    </Box>

                    <Box sx={{
                        position: 'absolute',
                        bottom: 60,
                        right: -10,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        zIndex: 3
                    }}>
                        <ShareIcon sx={{ fontSize: 16, color: '#facc15' }} />
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#475569' }}>Share</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
                <Paper sx={styles.taskCard} elevation={0}>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AssignmentIcon color="primary" /> Your Task
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#475569', mb: 4 }}>
                        Create a short video (<strong>1-2 minutes</strong>) in English introducing one of your friends. You can film on your phone or laptop.
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
                        What to include in your video:
                    </Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{
                                        color: '#7c3aed',
                                        '&.Mui-checked': { color: '#7c3aed' }
                                    }}
                                />
                            }
                            label="Greeting (Hello/Hi/Good morning)"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{
                                        color: '#3b82f6',
                                        '&.Mui-checked': { color: '#3b82f6' }
                                    }}
                                />
                            }
                            label="The Introduction (This is my friend...)"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{
                                        color: '#10b981',
                                        '&.Mui-checked': { color: '#10b981' }
                                    }}
                                />
                            }
                            label="Key Facts (Name, Age, Favorite school subject)"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{
                                        color: '#f59e0b',
                                        '&.Mui-checked': { color: '#f59e0b' }
                                    }}
                                />
                            }
                            label="Closing (Nice to meet you / Goodbye)"
                        />
                    </FormGroup>
                </Paper>
            </Grid>
        </Grid>
    </Box>
);

const PadletShowcaseSection: React.FC = () => (
    <Box sx={{ ...styles.padletSection, p: { xs: 3, md: 5 }, mb: 8 }}>
        <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {[
                        {
                            step: 1,
                            title: 'Record Your Video',
                            desc: 'Use your smartphone or camera to record. Keep it 1-2 minutes.'
                        },
                        {
                            step: 2,
                            title: 'Open the Class Padlet',
                            desc: 'Click the button on the right to open our shared board.'
                        },
                        {
                            step: 3,
                            title: 'Upload & Add Your Name',
                            desc: 'Attach your video file and write your Full Name & Class.'
                        },
                        {
                            step: 4,
                            title: 'Interact with Classmates',
                            desc: 'Watch at least 2 other videos and leave a "Like".'
                        },
                    ].map((s) => (
                        <Box key={s.step} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                            <Box sx={styles.stepCircle}>{s.step}</Box>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 800 }}>{s.title}</Typography>
                                <Typography variant="body2" sx={{ color: alpha('#fff', 0.7) }}>{s.desc}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
                <Paper sx={{ bgcolor: alpha('#fff', 0.1), backdropFilter: 'blur(10px)', p: 6, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)' }} elevation={0}>
                    <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 3, bgcolor: '#facc15' }}>
                        <UploadFileIcon sx={{ fontSize: 40, color: '#1e293b' }} />
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Showcase Your Talent on Padlet!</Typography>
                    <Typography variant="body1" sx={{ color: alpha('#fff', 0.8), mb: 6 }}>
                        Upload your video lesson and see what your friends have created. Let's learn together!
                    </Typography>
                    <Button variant="contained" size="large" sx={{ bgcolor: '#facc15', color: '#1e293b', fontWeight: 800, py: 2, px: 4, borderRadius: 3, '&:hover': { bgcolor: '#eab308' } }}>
                        Open Our Class Padlet →
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    </Box>
);

const ProTipSection: React.FC = () => (
    <Box sx={styles.proTip}>
        <TipsAndUpdatesIcon sx={{ fontSize: 40, color: '#facc15', mb: 2 }} />
        <Typography variant="h5" sx={{ fontWeight: 800, color: '#b45309', mb: 1 }}>Pro Tip from Group 4!</Typography>
        <Typography variant="body1" sx={{ color: '#92400e', fontStyle: 'italic' }}>
            "Don't be afraid to make a few funny bloopers. Be yourself, and speak from the heart. Your teacher isn't looking for perfection—they want to see your effort!"
        </Typography>
    </Box>
);

const ProjectPage: React.FC = () => (
    <Box sx={{ pb: 6, bgcolor: '#f1f5f9', minHeight: '100vh' }}>
        <Hero />
        <Container maxWidth="lg">
            <VideoTaskSection />
            <PadletShowcaseSection />
            <ProTipSection />
            <BackButton />
        </Container>
    </Box>
);

export default ProjectPage;
