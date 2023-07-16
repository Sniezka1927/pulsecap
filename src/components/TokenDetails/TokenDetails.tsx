import React from "react";
import Cont from "../UI/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TokenHeader from "./Token/TokenHeader";
import TokenData from "./Token/TokenData";
import TokenCalculator from "./Token/TokenCalculator";
import TokenComments from "./Token/TokenComments";
import TokenAbout from "./Token/TokenAbout";
import { ChartComponent } from "./Token/TokenChart";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: "1em",
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

type Props = {};

const TokenDetails = (props: Props) => {
  return (
    <Cont>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Item>
              <Grid container spacing={0}>
                <Grid item md={6}>
                  <TokenHeader />
                </Grid>
                <Grid item md={6}>
                  <TokenData />
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Item>
              <ChartComponent
                data={[
                  { time: "2018-12-22", value: 32.51 },
                  { time: "2018-12-23", value: 31.11 },
                  { time: "2018-12-24", value: 27.02 },
                  { time: "2018-12-25", value: 27.32 },
                  { time: "2018-12-26", value: 25.17 },
                  { time: "2018-12-27", value: 28.89 },
                  { time: "2018-12-28", value: 25.46 },
                  { time: "2018-12-29", value: 23.92 },
                  { time: "2018-12-30", value: 22.68 },
                  { time: "2018-12-31", value: 22.67 },
                ]}
              />
            </Item>
            <Item>
              <TokenAbout />
            </Item>
          </Grid>
          <Grid item md={4}>
            <Item>
              <TokenCalculator />
            </Item>
            <Item>
              <TokenComments />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Cont>
  );
};

export default TokenDetails;
