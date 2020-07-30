import React from "react";
import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import WithoutAccount from "./WithoutAccount";
import NewAccount from "./NewAccount";

export default function AccountDetails() {
  const [accountOption, set_accountOption] = useState(
    "Make a new account *TODO"
  );

  const accountHandleChange = (event) => {
    set_accountOption(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="acount option"
          name="account option"
          value={accountOption}
          onChange={accountHandleChange}
        >
          <FormControlLabel
            value="Make a new account"
            control={<Radio />}
            label="Make a new account"
          />
          <FormControlLabel
            value="Place order without account"
            control={<Radio />}
            label="Place order without account"
          />
        </RadioGroup>
        {accountOption === "Place order without account" ? (
          <WithoutAccount />
        ) : (
          <NewAccount />
        )}
      </FormControl>{" "}
    </div>
  );
}
