import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import Container from "@material-ui/core/Container";
import TranslatorCard from "./TranslatorCard";
import { fetchProfiles } from "../../../store/translation/actions";
import { selectProfiles } from "../../../store/translation/selectors";

export default function TranslatorProfiles() {
  const dispatch = useDispatch();
  const profiles = useSelector(selectProfiles);

  useEffect(() => {
    dispatch(fetchProfiles());
  }, [dispatch]);

  return (
    <div>
      <Container maxWidth="sm">
        <h5>2. Select your favorite translator</h5>{" "}
        {profiles.length === 0 ? null : (
          <Carousel timeout={100} autoPlay={false}>
            {profiles.map((profile, i) => (
              <TranslatorCard key={i} profile={profile} />
            ))}
          </Carousel>
        )}
      </Container>
    </div>
  );
}
