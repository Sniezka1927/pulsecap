import React from "react";
import Cont from "../../UI/Container";
import Logo from "../../Logo/Logo";
import Title from "../../UI/Title";
import styles from "../Token.module.scss";
import {
  Telegram,
  Twitter,
  Reddit,
  FeedOutlined,
  DocumentScannerOutlined,
} from "@mui/icons-material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { Grid } from "@mui/material";
type Props = {};

const TokenHeader = (props: Props) => {
  return (
    <Cont>
      <table className={styles.table}>
        <tr>
          <td>
            <Logo />
          </td>
          <td>
            <Title>Token Name</Title>
          </td>
        </tr>
      </table>
      <div className={styles.rankState}>Rank: #1</div>
      <div className={styles.redirectContainer}>
        <Grid container spacing={1}>
          <Grid item>
            <a href="/" className={styles.redirect}>
              <ManageSearchIcon className={styles.icon} /> Scan
            </a>
          </Grid>
          <Grid item>
            <a href="/" className={styles.redirect}>
              <Twitter className={styles.icon} /> Twitter
            </a>
          </Grid>
          <Grid item>
            <a href="/" className={styles.redirect}>
              <Reddit className={styles.icon} /> Reddit
            </a>
          </Grid>
          <Grid item>
            <a href="/" className={styles.redirect}>
              <Telegram className={styles.icon} /> Telegram
            </a>
          </Grid>
          <Grid item>
            <a href="/" className={styles.redirect}>
              <SportsEsportsIcon className={styles.icon} /> Discord
            </a>
          </Grid>
          <Grid item>
            <a href="/" className={styles.redirect}>
              <DocumentScannerOutlined className={styles.icon} /> Medium
            </a>
          </Grid>
          <Grid item>
            <a href="/" className={styles.redirect}>
              <FeedOutlined className={styles.icon} /> Whitepaper
            </a>
          </Grid>
        </Grid>
      </div>
      {/* <div>Category: cryptocurrency</div> */}
    </Cont>
  );
};

export default TokenHeader;
