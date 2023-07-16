import React from "react";
import Cont from "../UI/Container";
import Title from "../UI/Title";
import BasicSelect from "../UI/BasicSelect";
import { SelectChangeEvent } from "@mui/material/Select";
import ResponsiveDateRangePickers from "../UI/DatePicker";

type Props = {};

const PromotionDate = (props: Props) => {
  const [project, setProject] = React.useState("");

  const handleChange = (event: any) => {
    setProject(event.target.value as string);
  };

  return (
    <Cont>
      <Title>4. Select Project you want to promote</Title>
      <BasicSelect
        label="Select project"
        value={project}
        onChangeHandler={handleChange}
      />
      <Title>5. Select Dates</Title>
      <ResponsiveDateRangePickers />
    </Cont>
  );
};

export default PromotionDate;
