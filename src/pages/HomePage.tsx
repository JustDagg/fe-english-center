import React from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    alpha,
    Grid,
    Card,
    CardContent,
    Avatar,
} from '@mui/material';
import type {
    Theme,
    SxProps
} from '@mui/material';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsIcon from '@mui/icons-material/Groups';

const heroStyles = {
    heroOuter: {
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

const qaStyles = {
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
        cursor: 'pointer',
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

const exploreStyles = {
    section: {
        py: 6,
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
        fontSize: { xs: '1.5rem', md: '2rem' },
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

const questions = [
    {
        icon: <BadgeIcon />,
        question: "What's your name?",
        answer: "My name is...",
        color: '#4f46e5'
    },
    {
        icon: <CalendarMonthIcon />,
        question: "How old are you?",
        answer: "I'm ... years old",
        color: '#0ea5e9'
    },
    {
        icon: <LocationOnIcon />,
        question: "Where are you from?",
        answer: "I'm from...",
        color: '#f59e0b'
    },
    {
        icon: <SchoolIcon />,
        question: "What school do you go to?",
        answer: "I go to ... school",
        color: '#ef4444'
    },
    {
        icon: <StarIcon />,
        question: "What's your favorite subject?",
        answer: "My favorite subject is ...",
        color: '#10b981'
    },
    {
        icon: <SportsEsportsIcon />,
        question: "What do you like to do?",
        answer: "I like to ... / I enjoy ...",
        color: '#8b5cf6'
    },
    {
        icon: <DirectionsRunIcon />,
        question: "This is my friend...",
        answer: "Nice to meet you",
        color: '#ec4899'
    },
    {
        icon: <SentimentVerySatisfiedIcon />,
        question: "Nice to meet you, too!",
        answer: "Let's be friends!",
        color: '#6366f1'
    },
];

const exploreItems = [
    {
        icon: <GroupsIcon />,
        title: "Getting to know you",
        desc: "Learn the basics of introducing yourself.",
        color: '#3b82f6',
        to: '/about'
    },
    {
        icon: <MenuBookIcon />,
        title: "Virtual Lesson",
        desc: "Core vocabulary & grammar lessons.",
        color: '#10b981',
        to: '/lesson'
    },
    {
        icon: <AssignmentIcon />,
        title: "School Life Project",
        desc: "Creative tasks and Padlet assignments.",
        color: '#ef4444',
        to: '/project'
    },
];

const Hero: React.FC = () => (
    <Box sx={heroStyles.heroOuter}>
        <Container maxWidth="md">
            <Typography
                variant="overline"
                sx={heroStyles.overline}
            >
                TOPIC 1: INTRODUCING A FRIEND
            </Typography>
            <Typography
                variant="h4"
                sx={heroStyles.title}
            >
                UNIT 1: <span style={{ color: '#facc15' }}>MY NEW SCHOOL</span>
            </Typography>
            <Typography
                variant="h5"
                sx={heroStyles.subtitle}
            >
                Introducing a Friend 👋
            </Typography>
            <Typography
                variant="body1"
                sx={heroStyles.body}
            >
                Learn helpful vocabulary and grammar to introduce your friends at your new school. Practice with our interactive exercises.
            </Typography>
            <Box
                sx={heroStyles.buttonContainer}
            >
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<PlayArrowIcon />}
                    component={Link}
                    to="/lesson"
                    sx={heroStyles.primaryButton}
                >
                    Start Learning
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<HelpOutlineIcon />}
                    component={Link}
                    to="/about"
                    sx={heroStyles.secondaryButton}
                >
                    View Tutorial
                </Button>
            </Box>
        </Container>
    </Box>
);

const QASection: React.FC = () => (
    <Box sx={qaStyles.section}>
        <Container maxWidth="lg">
            <Typography
                variant="overline"
                sx={qaStyles.tag}
            >
                KEY LANGUAGE
            </Typography>
            <Typography
                variant="h2"
                sx={qaStyles.title}
            >
                Useful Questions & Answers
            </Typography>
            <Typography
                variant="body1"
                sx={qaStyles.description}
            >
                These questions and answers part help you get to know a new friend in English.
            </Typography>
            <Grid container spacing={4}>
                {questions.map((item, index) => (
                    <Grid
                        size={{ xs: 12, sm: 6, md: 3 }}
                        key={index}
                    >
                        <Card sx={qaStyles.card(item.color)}>
                            <CardContent sx={{ textAlign: 'left', p: 3 }}>
                                <Box
                                    sx={qaStyles.iconWrapper(item.color)}
                                >
                                    {item.icon}
                                </Box>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 700, mb: 1 }}
                                >
                                    {item.question}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: alpha('#fff', 0.6) }}
                                >
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

const ExploreSection: React.FC = () => (
    <Box sx={exploreStyles.section}>
        <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography
                    variant="overline"
                    sx={exploreStyles.tag}
                >
                    NAVIGATE
                </Typography>
                <Typography
                    variant="h2"
                    sx={exploreStyles.title}
                >
                    Explore the Unit
                </Typography>
                <Typography
                    variant="body1"
                    sx={exploreStyles.description}
                >
                    Choose a section to jump into your learning journey
                </Typography>
            </Box>
            <Grid
                container
                spacing={3}
                columns={12}
                justifyContent="center"
            >
                {exploreItems.map((item, index) => (
                    <Grid
                        size={{ xs: 12, sm: 6, md: 4 }}
                        key={index}
                    >
                        <Card
                            component={Link}
                            to={item.to}
                            sx={exploreStyles.card(item.color)}
                        >
                            <CardContent
                                sx={{ textAlign: 'center', p: 4 }}
                            >
                                <Avatar
                                    sx={exploreStyles.avatar(item.color)}
                                >
                                    {item.icon}
                                </Avatar>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, mb: 1, color: '#1e293b' }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: '#64748b', lineHeight: 1.6 }}
                                >
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

const HomePage: React.FC = () => (
    <Box>
        <Hero />
        <QASection />
        <ExploreSection />
    </Box>
);

export default HomePage;
