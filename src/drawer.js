import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import { Grid, Box, Card, CardContent } from "@material-ui/core";
import Doughgraph from "./doughgraph";
import Linechart from './linechart'
import Stackchart from './stackedchart'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "#D3D3D3",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  cardheight:{
      minHeight:300,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap color="textPrimary">
            Amar Sarkar Sentiment Analysis
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ backgroundColor: "#4ee44e" }}
        >
          <Box m={2} p={1}>
            <Grid item>
              <Avatar src="/broken-image.jpg" />
            </Grid>
          </Box>
          <Grid item>
            <Typography>Welcome User</Typography>
          </Grid>
        </Grid>

        <div className={classes.toolbar} />
        <Divider />

        <List>
          {[
            "Summary DashBoard",
            "Sentiment Analysis",
            "Mood Analysis",
            "Infuencer Analysis",
            "Geo Hot Spot Analysis",
            "Word Cloud",
            "Trending Subject",
            "Trend Analysis",
            "Demography",
            "Behavior Analysis",
          ].map((text, index) => (
            <>
              <ListItem button key={text}>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ color: "#4ee44e" }}
        >
          Summary Dashboard
        </Typography>
            <Box height="50%" width={1}>
        <Grid container direction="row" spacing={2} justify="flex-start">

          <Grid item xs={12} md={4}>
            <Card elevation={2} className={classes.cardheight} >
              <CardContent>
                <Doughgraph />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={2} className={classes.cardheight}>
              <CardContent>
                <Linechart/>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={2} className={classes.cardheight}>
              <CardContent>
                <Stackchart />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
            </Box>
            <Box height="50%" width={1}>
        <Grid container direction="row" spacing={2} justify="flex-start">
          <Grid item xs={12} md={4}>
            <Card elevation={2} className={classes.cardheight}>
              <CardContent>
                <Doughgraph />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={2} className={classes.cardheight}>
              <CardContent>
                <Doughgraph />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={2} className={classes.cardheight}>
              <CardContent>
                <Doughgraph />
              </CardContent>
            </Card>
          </Grid>
        </Grid></Box>
      </main>
    </div>
  );
}
