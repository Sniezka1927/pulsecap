import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  label: string;
  value: string;
  onChangeHandler: React.ChangeEvent<HTMLSelectElement> | any;
  options?: string[];
};
export default function BasicSelect(props: Props) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label={props.label}
          onChange={props.onChangeHandler}
        >
          <MenuItem value={10}>The People of Pulsechain</MenuItem>
          <MenuItem value={20}>Pulsechain</MenuItem>
          <MenuItem value={30}>PulseX</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
