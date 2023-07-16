import React from "react";
import Cont from "../../UI/Container";
import Logo from "../../Logo/Logo";
import Title from "../../UI/Title";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Grid } from "@mui/material";
import styles from "../Token.module.scss";
type Props = {};

const TokenCalculator = (props: Props) => {
  return (
    <Cont>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <div className={styles.usdContainer}>
            <Logo />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles.usdContainer}>
            <Title>Token name</Title>
          </div>{" "}
        </Grid>
        <Grid item xs={4}>
          <div className={styles.usdContainer}>0</div>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <div className={styles.usdContainer}>
            <AttachMoneyIcon className={styles.usdIcon} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles.usdContainer}>
            <Title>USD</Title>
          </div>{" "}
        </Grid>
        <Grid item xs={4}>
          <div className={styles.usdContainer}>0</div>
        </Grid>
      </Grid>
    </Cont>
  );
};

export default TokenCalculator;
