import { Button, Select, Typography } from "@mui/material";
import { Form } from "react-router-dom";
import SearchAppBar from "./NavBar";
import MiniDrawer from "./drawer";
import { useState } from "react";

export default function Create () {
const [selectedOptions,setSelectedOptions] = useState ([]);
    function countSelected(selectObject) {
        let numberSelected = 0;
        for (let i = 0; i < selectObject.options.length; i++) {
          if (selectObject.options[i].selected) {
            numberSelected++;
          }
        }
        return numberSelected;
      }
      
      const handleSelectChange = (event) => {
        const options = event.target.options;
        const selectedValues = [];
        for (let i = 0; i < options.length; i++) {
          if (options[i].selected) {
            selectedValues.push(options[i].value);
          }
        }
        setSelectedOptions(selectedValues);
      };

      const handleButtonClick = () => {
        console.log(`You have selected ${selectedOptions.length} option(s).`);
      };
      
    return (
        <>
        <SearchAppBar />
        <MiniDrawer />
        
        <Typography>
            hello
            </Typography>

            <form name="selectForm">
  <label htmlFor="musicTypes"
    >Choose some music types, then click the button below:</label
  >
  <Select
          id="musicTypes"
          name="musicTypes"
          multiple
          onChange={handleSelectChange}
          value={selectedOptions}
        >
    <option selected>R&B</option>
    <option>Jazz</option>
    <option>Blues</option>
    <option>New Age</option>
    <option>Classical</option>
    <option>Opera</option>
  </Select>
  <Button onClick={handleButtonClick}>How many are selected?</Button>
    </form>
        </>
        );
}
