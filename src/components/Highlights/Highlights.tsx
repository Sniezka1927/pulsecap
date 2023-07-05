import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import PeopleTokenHighlights from "./Highlighted/People";
import Cont from "../../UI/Container";
import styles from "./Highlights.module.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

type Props = {};

const Highlights = (props: Props) => {
  return (
    <Cont>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        useFlexGap
        flexWrap="wrap"
      >
        <Item className={styles.singleItem}>
          <PeopleTokenHighlights />
          <PeopleTokenHighlights />
          <PeopleTokenHighlights />
          <PeopleTokenHighlights />
          <PeopleTokenHighlights />
        </Item>
        <Item>
          <PeopleTokenHighlights />
          <PeopleTokenHighlights />
          <PeopleTokenHighlights />
          <PeopleTokenHighlights />
          <PeopleTokenHighlights />
        </Item>
        <Item>
          <PeopleTokenHighlights />
          <PeopleTokenHighlights />
          <PeopleTokenHighlights />
          <PeopleTokenHighlights />
          <PeopleTokenHighlights />
        </Item>
      </Stack>
    </Cont>
  );
};

export default Highlights;
