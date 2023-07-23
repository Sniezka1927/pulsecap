import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Cont from "../UI/Container";
import Title from "../UI/Title";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  // height: "800px",
}));

type Props = {};

const PrivacyPolicy = (props: Props) => {
  return (
    <Cont>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Item>
              <Title>Loreum Ipsum</Title>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Cont>
  );
};

export default PrivacyPolicy;
