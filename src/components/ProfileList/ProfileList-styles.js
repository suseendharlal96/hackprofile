import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    textTransform: "capitalize",
  },
  skillsheader: {
    backgroundColor: "lightsalmon",
  },
  listItems: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default useStyles;
