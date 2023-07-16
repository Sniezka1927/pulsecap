import React, { useState } from "react";
import Cont from "../UI/Container";
import Title from "../UI/Title";
import styles from "./Promote.module.scss";
import { Grid } from "@mui/material";
import Input from "../UI/Input";
import { SelectChangeEvent } from "@mui/material/Select";
type Props = {};

const PromotionType = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [walletAddress, setWalletAddress] = useState<string>("");

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const walletHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const [project, setProject] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setProject(event.target.value as string);
  };
  return (
    <Cont>
      <Title>1. Select type of promotion</Title>
      <div className={styles.promotedSpot}>
        <h2>Promoted spot: 100$ / day</h2>
        <div>
          Your project in the promoted coins section on top of our homepage.
          These are the most prominent places for projects.
        </div>
      </div>
      <h2>Discount</h2>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <span className={styles.text}>3 days+</span>
        </Grid>
        <Grid item xs={6}>
          <span className={styles.greenText}>15%</span> OFF
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <span className={styles.text}>7 days+</span>{" "}
        </Grid>
        <Grid item xs={6}>
          <span className={styles.greenText}>30%</span> OFF
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <span className={styles.text}>14 days+</span>
        </Grid>
        <Grid item xs={6}>
          <span className={styles.greenText}>45%</span> OFF
        </Grid>
      </Grid>
      <Title>2. Your email address</Title>
      <Input
        type="email"
        onChangeHandler={emailHandler}
        value={email}
        placeholder="email address"
      />
      <Title>3. Your wallet address</Title>
      <Input
        type="text"
        onChangeHandler={walletHandler}
        value={walletAddress}
        placeholder="wallet address"
      />
      <div>
        *Pulsechain wallet address from which you are going to make a payment
      </div>
    </Cont>
  );
};

export default PromotionType;
