import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import type { Theme, SxProps } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import theme from './theme/theme';
import Header from './components/Header';
import Hero from './components/Hero';
import QASection from './components/QASection';
import ExploreSection from './components/ExploreSection';
import Footer from './components/Footer';
import AboutPage, { LessonPage, PracticePage } from './pages/Pages';

const styles = {
    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
    } as SxProps<Theme>,
    mainBox: {
        flexGrow: 1,
    } as SxProps<Theme>,
};

const LandingPage: React.FC = () => (
    <>
        <Hero />
        <QASection />
        <ExploreSection />
    </>
);

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Box sx={styles.appContainer}>
                    <Header />
                    <Box component="main" sx={styles.mainBox}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" replace />} />
                            <Route path="/home" element={<LandingPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/lesson" element={<LessonPage />} />
                            <Route path="/practice" element={<PracticePage />} />
                            <Route path="/project" element={<PracticePage />} />
                            <Route path="*" element={<Navigate to="/home" replace />} />
                        </Routes>
                    </Box>
                    <Footer />
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
