import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Telegram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import styles from "./Footer.module.scss";
type Props = {};

const Foter = (props: Props) => {
  return (
    <Box component="footer" className={styles.background}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={5}>
            <Typography variant="h6" gutterBottom>
              Logo
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Products
            </Typography>
            <Typography variant="body2">The $PEOPLE</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography variant="body2">About us</Typography>
            <Typography variant="body2">Terms of use</Typography>
            <Typography variant="body2">Privacy policy</Typography>
            <Typography variant="body2">Cookie preferences</Typography>
            <Typography variant="body2">Disclaimer</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Typography variant="body2">Request form</Typography>
            <Typography variant="body2">Contact support</Typography>
            <Typography variant="body2">FAQ</Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Typography variant="h6" gutterBottom>
              Socials
            </Typography>
            <Link href="https://www.facebook.com/" className={styles.telegram}>
              <Telegram />
            </Link>
            <Link href="https://www.twitter.com/" className={styles.telegram}>
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              PulseChainExplorer
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Foter;
