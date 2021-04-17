import React, { useState } from "react";

import {
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";

import { ExpandLess, ExpandMore } from "@material-ui/icons";

import useStyles from "./ProfileList-styles";

export default function ProfileList({ profileList }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const skillNames = {
    ds: "Data Structures",
    algorithms: "Algorithms",
    cpp: "C++",
    java: "Java",
    js: "Javascript",
    html: "HTML",
    python: "Python",
  };

  const getSkillNames = (skill) => {
    return skillNames[skill];
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <h2 style={{ textAlign: "center" }}>Hacker Details</h2>
        </ListSubheader>
      }
      className={classes.root}
    >
      {Object.keys(profileList).map((list) => {
        return (
          list !== "competitiveSkills" &&
          list !== "Image" && (
            <ListItem key={list} button className={classes.listItems}>
              <h4 className={classes.heading}>{list} : </h4>
              <p>{profileList[list]}</p>
            </ListItem>
          )
        );
      })}
      <ListItem
        className={classes.skillsheader}
        button
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <ListItemText primary="Competitive Percentiles" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Object.keys(profileList.competitiveSkills).map((skills) => (
            <ListItem button key={skills} className={classes.listItems}>
              <h4 className={classes.heading}>{getSkillNames(skills)} : </h4>
              <p>{profileList.competitiveSkills[skills]}</p>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
