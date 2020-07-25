import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";
import Button from "@material-ui/core/Button";
import Tab from "@material-ui/core/Tab";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <Tab component="a" label={`Welcome, ${user.fullName}!`} disabled />{" "}
      {user.isTranslator === true ? (
        <Tab
          component="a"
          href="/dashboard"
          onClick={(event) => event.preventDefault}
          label="my dashboard"
        />
      ) : null}
      <Button
        style={{ margin: "0px 10px 0px 0px" }}
        size="small"
        variant="contained"
        color="secondary"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </div>
  );
}
