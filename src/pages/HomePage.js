import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, Card, Typography } from "@material-ui/core";
import MyButton from "../components/Button";
import { Link } from "react-router-dom";
import About from "../components/About";
import { useStylesHome } from "../style/Homepage";

export default function HomePage() {
  const classes = useStylesHome();

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
                    <MyButton
                      text="Let's go!"
                      color="primary"
                      variant="contained"
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={"/login"}>
                    <MyButton
                      text="Login / signup"
                      color="primary"
                      variant="outlined"
                    />
                  </Link>
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
            <br />
            <Link to={"/login/translator"}>
              <MyButton
                variant="outlined"
                color="secondary"
                text="translator Login / signup"
              />
            </Link>
            <br />
          </div>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Tone of Choice, August 2020. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}
