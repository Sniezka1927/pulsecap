import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Cont from "../../UI/Container";
import React, { useEffect, useState } from "react";
import Pair from "../../interfaces/Pair";
import Token from "./Token";
import styles from "./Tokens.module.scss";
interface Column {
  id: number;
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 0, label: "#", align: "center" }, // minWidth: 170
  { id: 1, label: "Name", align: "center" }, // minWidth: 100
  {
    id: 2,
    label: "Price",
    // minWidth: 170,
    align: "center",
  },
  {
    id: 3,
    label: "1h %",
    // minWidth: 170,
    align: "center",
  },
  {
    id: 4,
    label: "6h %",
    // minWidth: 170,
    align: "center",
  },
  {
    id: 5,
    label: "24h %",
    // minWidth: 170,
    align: "center",
  },
  //   {
  //     id: 6,
  //     label: "Market Cap",
  //     // minWidth: 170,
  //     align: "right",
  //   },
  {
    id: 7,
    label: "Volume",
    // minWidth: 170,
    align: "center",
  },
  {
    id: 8,
    label: "Circulating Supply",
    // minWidth: 170,
    align: "center",
  },
  {
    id: 9,
    label: "Listing Date",
    // minWidth: 170,
    align: "center",
  },
];

export default function StickyHeadTable() {
  const [token, setToken] = useState<Pair>();

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x0019cf83bb6eba7a800bdf55ede5d9d170a4dbed",
        { method: "GET" }
      );
      const data = await response.json();
      setToken(data.pair);
    })();
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Cont>
      <TableContainer className={styles.tokens}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead style={{ backgroundColor: "#f7f5f5" }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#f7f5f5",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })} */}
            {token !== undefined ? <Token token={token} /> : null}
            {token !== undefined ? <Token token={token} /> : null}
            {token !== undefined ? <Token token={token} /> : null}
            {token !== undefined ? <Token token={token} /> : null}
            {token !== undefined ? <Token token={token} /> : null}
            {token !== undefined ? <Token token={token} /> : null}
            {token !== undefined ? <Token token={token} /> : null}
            {token !== undefined ? <Token token={token} /> : null}
            {token !== undefined ? <Token token={token} /> : null}
            {token !== undefined ? <Token token={token} /> : null}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={200}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Cont>
  );
}
