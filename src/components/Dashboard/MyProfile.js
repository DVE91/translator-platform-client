import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, fetchSkills } from "../../store/dashboard/actions";
import { selectProfile, selectSkills } from "../../store/dashboard/selectors";
import { fetchLanguages } from "../../store/translation/actions";
import { selectLanguages } from "../../store/translation/selectors";
import { makeStyles } from "@material-ui/styles";
import { selectUser } from "../../store/user/selectors";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Loading from "../Loading";
import SkillFeed from "./SkillFeed";
import Skill from "./Skill";

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 600,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
  },
  actions: {
    justifyContent: "flex-end",
  },
}));

export default function MyProfile() {
  const [addSkill, set_addSkill] = useState(false);

  const classes = useStyles();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);
  const skills = useSelector(selectSkills);
  const languages = useSelector(selectLanguages);

  useEffect(() => {
    dispatch(fetchProfile(user.id));
  }, [dispatch, user.id]);

  useEffect(() => {
    dispatch(fetchSkills(user.id));
  }, [dispatch, user.id]);

  useEffect(() => {
    dispatch(fetchLanguages());
  }, [dispatch]);

  const cancelAddSkill = () => {
    set_addSkill(false);
  };

  console.log("LANGUAGES?", languages, "AND SKILLS?", skills);

  return (
    <Card className={classes.root} raised={true}>
      <CardHeader
        title={
          <Typography gutterBottom component="h2" variant="button">
            My profile
          </Typography>
        }
        avatar={<Avatar alt="profile icon" src={user.imageUrl} />}
      />
      <Divider />
      {profile.id !== undefined &&
      skills.length !== 0 &&
      languages.length !== 0 ? (
        <CardContent>
          <div className={classes.chartContainer}>
            <div className="profileItem">
              <h5>My skills</h5>
              <span>
                I translate...{" "}
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  onClick={() => set_addSkill(true)}
                >
                  add
                </Button>
                {addSkill ? <Skill languages={languages} cancelAddSkill={cancelAddSkill} /> : null}
                {skills.map((skill, i) => (
                  <SkillFeed skills={skill} languages={languages} key={i} />
                ))}
              </span>
            </div>
            <div className="profileItem">
              <br />
              <Divider variant="middle" />
              <br />
            </div>
            <div className="profileItem">
              <h5>My writing style</h5>
              <p>{profile.writingStyle}</p>
              <h5>My experience</h5>
              <p>{profile.experience}</p>
            </div>
          </div>
        </CardContent>
      ) : (
        <Loading />
      )}
    </Card>
  );
}
