import React from "react";
import PromotionType from "./PromotionType";
import PromotionDate from "./PromotionDate";
import PromotionConfirmation from "./PromotionConfirmation";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Cont from "../UI/Container";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  height: "800px",
}));

type Props = {};

const Promote = (props: Props) => {
  return (
    <Cont>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Item>
              <PromotionType />
            </Item>
          </Grid>
          <Grid item md={4}>
            <Item>
              <PromotionDate />
            </Item>
          </Grid>
          <Grid item md={4}>
            <Item>
              <PromotionConfirmation />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Cont>
  );
};

export default Promote;
