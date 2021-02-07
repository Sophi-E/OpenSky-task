import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
// import CircularProgress from "@material-ui/core/CircularProgress";

export default function Combo({ url, label, onChangeHandler }) {
  const [open, setOpen] = React.useState(false);
  //   const [options, setOptions] = React.useState([
  const options = [
    { id: 10, title: "10 hours", value: -10 },
    { id: 20, title: "20 hours", value: -20 },
    { id: 30, title: "30 hours", value: -30 },
    { id: 40, title: "40 hours", value: -40 },
    { id: 50, title: "50 hours", value: -50 },
  ];

  return (
    <Autocomplete
      id="hours-past"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionLabel={(option) => option.title}
      options={options}
      onChange={(event, values) => onChangeHandler(values)}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
