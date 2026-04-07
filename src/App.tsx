import React from 'react';
import {
    ThemeProvider,
    CssBaseline,
    Box
} from '@mui/material';
import type {
    Theme,
    SxProps
} from '@mui/material';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import theme from './theme/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LessonPage from './pages/LessonPage';
import ProjectPage from './pages/ProjectPage';
import ScrollToTop from './components/ScrollToTop';

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

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <ScrollToTop />
                <Box sx={styles.appContainer}>
                    <Header />
                    <Box component="main" sx={styles.mainBox}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" replace />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/lesson" element={<LessonPage />} />
                            <Route path="/project" element={<ProjectPage />} />
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
