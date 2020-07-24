import React from "react";
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
      <Tab component="a" label={`Welcome, ${user.fullName}!`} />{" "}
      {user.isTranslator === true ? (
        <Tab component="button" label="Visit dashboard" href="/dashboard" />
      ) : null}
      <Button
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
