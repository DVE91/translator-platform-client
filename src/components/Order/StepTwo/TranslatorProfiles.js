import React from "react";
import lodash from "lodash";
import deepdash from "deepdash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { Button, Container } from "@material-ui/core";
import TranslatorCard from "./TranslatorCard";
import { fetchProfiles } from "../../../store/translation/actions";
import { selectProfiles } from "../../../store/translation/selectors";
import { selectOrder } from "../../../store/order/selectors";

export default function TranslatorProfiles() {
  const [filteredTranslations, set_FilteredTranslations] = useState([]);
  const _ = deepdash(lodash);
  const dispatch = useDispatch();
  const profiles = useSelector(selectProfiles);
  const order = useSelector(selectOrder);
  const originalLanguage = order.originalLanguage;
  const nativeLanguage = order.nativeLanguage;

  useEffect(() => {
    dispatch(fetchProfiles());
  }, []);

  const tester = profiles.filter((profile) => {
    const filtered = profile.translationSkills.filter((skill) => {
      console.log(
        `does ${skill.originalLanguage.title} match ${originalLanguage}?`,
        skill.originalLanguage.title === originalLanguage &&
          skill.nativeLanguage.title === nativeLanguage
      );
      return (
        skill.originalLanguage.title === originalLanguage &&
        skill.nativeLanguage.title === nativeLanguage
      );
    });

    // if (filtered.length > 0)
    //   set_FilteredTranslations([...filteredTranslations, filtered]);
    // console.log("whats filtered?", filteredTranslations);
  });

  console.log("TOTAL TESTER FUNCTION", tester);

  // const filteredAgents = allAgents.filter(
  //   (agent) => agent.languages.indexOf(language) !== -1
  // );
  // let filtrate = _.filterDeep(
  //   things,
  //   (value, key, parent) => {
  //     if (key == 'name' && parent.good) return true;
  //     if (key == 'good' && value == true) return true;
  //   }
  // );

  const filteredProfiles = profiles.filter((profile) =>
    profile.translationSkills.map((skill) =>
      skill.originalLanguage.title.includes(originalLanguage)
    )
  );

  //console.log("FILTERED PROFILES?", filteredProfiles);

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
