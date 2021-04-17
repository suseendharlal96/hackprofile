import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Grid, Container, Grow } from "@material-ui/core";

import { axiosClient } from "../axios";
import Profile from "../components/Profile/Profile";
import ProfileList from "../components/ProfileList/ProfileList";
import useStyles from "./Home-styles";

export const ProfileDetail = () => {
  const classes = useStyles();
  const location = useLocation();
  const [profileDetail, setProfileDetail] = useState(null);

  useEffect(() => {
    axiosClient
      .get(`/profiles/${location.pathname.split("/")[2]}`)
      .then((res) => {
        console.log(res);
        setProfileDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return !profileDetail ? (
    <div style={{ textAlign: "center" }}>
      <Typography variant="body1" gutterBottom>
        Fetching Details..
      </Typography>
    </div>
  ) : (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Profile details profile={profileDetail} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <div
              style={{
                maxHeight: "520px",
                overflow: "auto",
                borderLeft: "1px solid black",
              }}
            >
              <ProfileList profileList={profileDetail} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default ProfileDetail;
