import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import MyButton from "../components/Button";
import { Link } from "react-router-dom";
import About from "../components/About";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <h2>
              I want a fast, high quality translation that is perfectly tailored
              to my brand.
            </h2>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to={"/order"}>
                    <MyButton text="Let's go!" variant="contained" />
                  </Link>
                </Grid>
                <Grid item>
                  <MyButton text="Login / signup" variant="outlined" />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          <Card className={classes.card}>
            <About />
          </Card>
          <div>
            <MyButton text="translator Login / signup" />
          </div>
        </Container>
      </main>
    </div>
  );
}
