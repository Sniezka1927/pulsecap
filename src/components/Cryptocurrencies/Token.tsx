import React from "react";
import Pair from "../../interfaces/Pair";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import styles from "./Tokens.module.scss";
type Props = {
  token: Pair;
};

const Token = (props: Props) => {
  const token = props.token;
  return (
    <TableRow hover tabIndex={-1} key={0} className={styles.row}>
      <TableCell align={"center"}>0</TableCell>
      <TableCell align={"center"}>{token.baseToken.name}</TableCell>
      <TableCell align={"center"}>{token.priceUsd}$</TableCell>
      <TableCell align={"center"}>{token.priceChange.h1}%</TableCell>
      <TableCell align={"center"}>{token.priceChange.h6}%</TableCell>
      <TableCell align={"center"}>{token.priceChange.h24}%</TableCell>
      <TableCell align={"center"}>{token.volume.h24}</TableCell>
      <TableCell></TableCell>
      <TableCell align={"center"}>
        {new Date(token.pairCreatedAt).toLocaleDateString()}
      </TableCell>
    </TableRow>
  );
};

export default Token;
