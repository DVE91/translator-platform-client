import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { Button, Container } from "@material-ui/core";
import TranslatorCard from "./TranslatorCard";
import { fetchProfiles } from "../../../store/translation/actions";
import { selectProfiles } from "../../../store/translation/selectors";
import { selectOrder } from "../../../store/order/selectors";

export default function TranslatorProfiles() {
  const dispatch = useDispatch();
  const profiles = useSelector(selectProfiles);
  const order = useSelector(selectOrder);
  const originalLanguage = order.originalLanguage;
  const nativeLanguage = order.nativeLanguage;

  useEffect(() => {
    dispatch(fetchProfiles(originalLanguage, nativeLanguage));
  }, []);

  return (
    <div>
      <Container maxWidth="sm">
        <h5>2. Select your favorite translator</h5>{" "}
        {profiles.length === 0 ? (
          <Button
            onClick={() => dispatch(fetchProfiles())}
            variant="outlined"
            color="primary"
            size="large"
          >
            Search translators!
          </Button>
        ) : (
          <Carousel timeout={0} autoPlay={false}>
            {profiles.map((profile, i) => (
              <TranslatorCard key={i} profile={profile} />
            ))}
          </Carousel>
        )}
      </Container>
    </div>
  );
}
