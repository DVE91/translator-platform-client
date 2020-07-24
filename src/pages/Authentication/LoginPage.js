import React from "react";
import { useEffect } from "react";
import Login from "../../components/Authentication/Login";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  return (
    <div>
      <Login signUpLink={"/signup"} />
    </div>
  );
}
