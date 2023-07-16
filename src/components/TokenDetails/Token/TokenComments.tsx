import React from "react";
import Cont from "../../UI/Container";
import { Grid } from "@mui/material";
import styles from "../Token.module.scss";
type Props = {};

const TokenComments = (props: Props) => {
  return (
    <Cont>
      <div className={styles.commentContainer}>
        <div className={styles.comment}>
          <Grid container spacing={0}>
            <Grid item md={12}>
              <span className={styles.author}>Sniezka</span>
            </Grid>
            <Grid item md={12}>
              <span className={styles.commentText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </Grid>
          </Grid>
        </div>{" "}
        <div className={styles.comment}>
          <Grid container spacing={0}>
            <Grid item md={12}>
              <span className={styles.author}>Sniezka</span>
            </Grid>
            <Grid item md={12}>
              <span className={styles.commentText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </Grid>
          </Grid>
        </div>{" "}
        <div className={styles.comment}>
          <Grid container spacing={0}>
            <Grid item md={12}>
              <span className={styles.author}>Sniezka</span>
            </Grid>
            <Grid item md={12}>
              <span className={styles.commentText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </Grid>
          </Grid>
        </div>{" "}
        <div className={styles.comment}>
          <Grid container spacing={0}>
            <Grid item md={12}>
              <span className={styles.author}>Sniezka</span>
            </Grid>
            <Grid item md={12}>
              <span className={styles.commentText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </Grid>
          </Grid>
        </div>
        <div className={styles.comment}>
          <Grid container spacing={0}>
            <Grid item md={12}>
              <span className={styles.author}>Sniezka</span>
            </Grid>
            <Grid item md={12}>
              <span className={styles.commentText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </Grid>
          </Grid>
        </div>
      </div>
    </Cont>
  );
};

export default TokenComments;
