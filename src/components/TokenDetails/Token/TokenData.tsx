import React from "react";
import Cont from "../../UI/Container";
import Title from "../../UI/Title";
import styles from "../Token.module.scss";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Grid } from "@mui/material";
type Props = {};

const TokenData = (props: Props) => {
  return (
    <Cont>
      <Grid container spacing={0}>
        <Grid item md={7}>
          <Title>$0.00000004365</Title>
        </Grid>
        <Grid item md={5}>
          <div className={styles.priceChange}>
            <KeyboardDoubleArrowUpIcon />
            <span className={styles.priceState}>24.5%</span>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item md={3}>
          Market Cap <br />
          999,999,999
        </Grid>
        <Grid item md={3}>
          FDV <br />
          999,999,999
        </Grid>
        <Grid item md={3}>
          Volume 24h <br />
          999,999,999
        </Grid>
        <Grid item md={3}>
          Circulating Supply <br />
          999,999,999
        </Grid>
        <Grid item md={3}>
          Total Supply <br />
          3,999,999,999
        </Grid>
      </Grid>
    </Cont>
  );
};

export default TokenData;
