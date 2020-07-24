import React from "react";
import { useEffect } from "react";
import Login from "../components/Authentication/Login";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../store/user/selectors";
import { useHistory } from "react-router-dom";

export default function TranslatorLoginPage() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const history = useHistory();

  useEffect(() => {
    if (token !== null && user.isTranslator === true) {
      history.push("/dashboard");
    }
  }, [token, history]);

  return (
    <div>
      <Login signUpLink={"/signup/translator"} />
    </div>
  );
}
