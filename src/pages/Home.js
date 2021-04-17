import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, Container, Grow, Typography } from "@material-ui/core";

import useStyles from "./Home-styles";
import Profiles from "../components/Profiles/Profiles";
import ProfileForm from "../components/ProfileForm/ProfileForm";

const Home = () => {
  const classes = useStyles();
  const authData = useSelector((state) => state.authReducer.authData);
  console.log(authData);
  const [editId, setEditId] = useState(null);

  return (
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
            <Profiles setEditId={setEditId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            {authData && authData.result.isAdmin ? (
              <div style={{ maxHeight: "520px", overflow: "auto",borderLeft:'1px solid black' }}>
                <ProfileForm editId={editId} setEditId={setEditId} />
              </div>
            ) : (
              <Typography variant="h6">
                Signin as admin to create/modify user profiles.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
