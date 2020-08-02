import React from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { Container } from "@material-ui/core";
import TranslatorCard from "./TranslatorCard";
import { fetchProfiles } from "../../../store/translation/actions";
import { selectProfiles } from "../../../store/translation/selectors";
import { selectOrder } from "../../../store/order/selectors";
import Loading from "../../Loading";

export default function TranslatorProfiles() {
  const dispatch = useDispatch();
  const moment = extendMoment(Moment);
  const profiles = useSelector(selectProfiles);
  const order = useSelector(selectOrder);
  const originalLanguage = order.originalLanguage;
  const nativeLanguage = order.nativeLanguage;

  useEffect(() => {
    dispatch(fetchProfiles(originalLanguage, nativeLanguage));
  }, [dispatch, order.endDate]);

  const filteredProfiles = profiles.filter((profile) => {
    const datesExtractedFromAvailability = profile.availabilities.map(
      (availability) => moment(availability.date, "YYYY-MM-DD")
    );
    const workingDaysNeeded =
      order.wordCount <= 2000
        ? 1
        : order.wordCount > 2000 && order.wordCount <= 4000
        ? 2
        : (order.wordCount > 4000) & (order.wordCount <= 6000)
        ? 3
        : (order.wordCount > 6000) & (order.wordCount <= 8000)
        ? 4
        : 5;

    const availableDaysTillDeadlineRange = moment.range(
      moment(new Date(), "YYYY-MM-DD"),
      moment(order.endDate, "YYYY-MM-DD")
    );

    let matchCounter = 0;
    datesExtractedFromAvailability.map((date) =>
      date.within(availableDaysTillDeadlineRange) ? matchCounter++ : null
    );

    if (matchCounter >= workingDaysNeeded) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <Container maxWidth="sm">
        <h5>2. Select your favorite translator</h5>{" "}
        {filteredProfiles.length === 0 ? (
          <div>
            <Loading />
            <p>
              Looks like there are no translators available... please change the
              deadline.
            </p>
          </div>
        ) : (
          <Carousel timeout={0} autoPlay={false}>
            {filteredProfiles.map((profile, i) => (
              <TranslatorCard key={i} profile={profile} />
            ))}
          </Carousel>
        )}
      </Container>
    </div>
  );
}
