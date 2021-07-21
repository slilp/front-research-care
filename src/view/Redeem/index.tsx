import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function Redeem() {
  const [test, setTest] = useState<any>({});
  const [check, setCheck] = useState<any>({});

  useEffect(() => {
    setTest({
      test1: { label: "test1", id: "5555" },
      test2: { label: "test2", id: "6666" },
    });
    setCheck({
      test1: { label: false, id: false },
      //   test2: { label: false, id: false },
    });
  }, []);

  const handleInputChange = (event: any, value: any, providerType: any) => {};

  const handleSubmit = () => {};

  return (
    <div>
      <p> {JSON.stringify(test)}</p>

      <p> {JSON.stringify(check)}</p>

      <p>ssss{check["test2"]?.label}</p>
      <button onClick={handleSubmit}>Submit</button>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={(option: any) => option.title}
        style={{ width: 300 }}
        onInputChange={(event, value) =>
          handleInputChange(event, value, "test2")
        }
        renderInput={(params: any) => (
          <TextField
            {...params}
            name="test2"
            label="Combo box"
            variant="outlined"
          />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

export default Redeem;
