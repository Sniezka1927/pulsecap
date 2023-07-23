import React from "react";
import Pair from "../../interfaces/Pair";
import { TableRow, TableCell } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import styles from "./Tokens.module.scss";
import { useNavigate } from "react-router-dom";
type Props = {
  token: Pair;
};

const Token = (props: Props) => {
  const token = props.token;
  const navigate = useNavigate();
  const redirectHandler = () => {
    navigate("/coin/asd");
  };
  return (
    <TableRow
      hover
      tabIndex={-1}
      key={0}
      className={styles.row}
      onClick={redirectHandler}
    >
      <TableCell align={"center"}>
        <StarIcon color="warning" />
        {/* <StarBorderIcon /> */}
      </TableCell>
      {/* <TableCell align={"center"}>0</TableCell> */}
      <TableCell align={"center"}>{token.baseToken.name}</TableCell>
      <TableCell align={"center"}>{token.priceUsd}$</TableCell>
      <TableCell align={"center"}>{token.priceChange.h1}%</TableCell>
      <TableCell align={"center"}>{token.priceChange.h6}%</TableCell>
      <TableCell align={"center"}>{token.priceChange.h24}%</TableCell>
      <TableCell align={"center"}>{token.volume.h24}</TableCell>
      <TableCell align={"center"}>N/A</TableCell>
      <TableCell align={"center"}>N/A</TableCell>

      <TableCell align={"center"}>
        {new Date(token.pairCreatedAt).toLocaleDateString()}
      </TableCell>
    </TableRow>
  );
};

export default Token;
