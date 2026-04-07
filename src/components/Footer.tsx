import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  alpha,
  Divider
} from '@mui/material';
import type {
  Theme,
  SxProps
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const styles = {
  footer: {
    backgroundColor: '#1e293b',
    color: '#cbd5e1',
    pt: 10,
    pb: 4,
  } as SxProps<Theme>,
  logo: {
    fontWeight: 800,
    color: '#fff',
    mb: 3,
  } as SxProps<Theme>,
  description: {
    color: '#94a3b8',
    lineHeight: 1.6,
  } as SxProps<Theme>,
  socialButton: {
    color: '#fff',
    backgroundColor: alpha('#fff', 0.1),
    '&:hover': {
      backgroundColor: alpha('#fff', 0.2),
    },
  } as SxProps<Theme>,
  columnTitle: {
    fontWeight: 700,
    color: '#fff',
    mb: 3,
  } as SxProps<Theme>,
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
  } as SxProps<Theme>,
  footerLink: {
    '&:hover': {
      color: '#fff',
    },
  } as SxProps<Theme>,
  divider: {
    borderColor: alpha('#fff', 0.1),
  } as SxProps<Theme>,
  copyright: {
    textAlign: 'center',
    mt: 4,
    color: '#64748b',
  } as SxProps<Theme>,
};

const Footer: React.FC = () => {
  return (
    <Box sx={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" sx={styles.logo}>
              ENGLISH CENTER
            </Typography>
            <Typography variant="body1" sx={styles.description}>
              Helping students master English with interaction and excitement.
              Start your journey with us and discover a new way of learning.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <IconButton sx={styles.socialButton}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={styles.socialButton}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={styles.socialButton}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={styles.socialButton}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Typography variant="h6" sx={styles.columnTitle}>
              QUICK PAGES
            </Typography>
            <Box sx={styles.linkContainer}>
              <Link component={RouterLink}
                to="/home"
                underline="none"
                color="inherit"
                sx={styles.footerLink}
              >
                Home
              </Link>
              <Link component={RouterLink}
                to="/about"
                underline="none"
                color="inherit"
                sx={styles.footerLink}
              >
                Getting to know you
              </Link>
              <Link component={RouterLink}
                to="/lesson"
                underline="none"
                color="inherit"
                sx={styles.footerLink}
              >
                Virtual Lesson
              </Link>
              <Link component={RouterLink}
                to="/project"
                underline="none"
                color="inherit"
                sx={styles.footerLink}
              >
                School Life Project
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Typography variant="h6" sx={styles.columnTitle}>
              RESOURCES
            </Typography>
            <Box sx={styles.linkContainer}>
              <Link href="#"
                underline="none"
                color="inherit"
                sx={styles.footerLink}
              >
                Documentation
              </Link>
              <Link href="#"
                underline="none"
                color="inherit"
                sx={styles.footerLink}
              >
                Support Center
              </Link>
              <Link href="#"
                underline="none"
                color="inherit"
                sx={styles.footerLink}
              >
                Privacy Policy
              </Link>
              <Link href="#"
                underline="none"
                color="inherit"
                sx={styles.footerLink}
              >
                Terms of Service
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={styles.columnTitle}
            >
              CONTACT US
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#94a3b8', mb: 1 }}
            >
              English Learning Center, Hanoi, Vietnam.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#94a3b8', mb: 1 }}
            >
              support@english.com
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#94a3b8' }}
            >
              +84 123 456 789
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={styles.divider} />
        <Typography
          variant="body2"
          sx={styles.copyright}
        >
          &copy; 2026 English. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
