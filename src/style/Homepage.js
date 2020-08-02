import { makeStyles } from "@material-ui/core/styles";

const backgroundImage =
  "https://images.unsplash.com/photo-1501349800519-48093d60bde0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";

export const useStylesHome = makeStyles((theme) => ({
  heroContent: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundColor: "rgb(242, 247, 255)",

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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
