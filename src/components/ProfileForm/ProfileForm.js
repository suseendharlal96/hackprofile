import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";

import useStyle from "./styles";
import * as action from "../../store/actions/index";
const ProfileForm = ({ editId, setEditId }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.profileReducer.creating);
  const profiles = useSelector((state) => state.profileReducer.profiles);
  const errors = useSelector((state) => state.profileReducer.errors);
  const editProfile = editId
    ? profiles &&
      profiles.length &&
      profiles.find((profile) => profile._id === editId)
    : null;
  const [profileData, setProfileData] = useState({
    name: "",
    Image: "",
    location: "",
    education: "",
    challengesSolved: 0,
    solutionSubmitted: 0,
    solutionAccepted: 0,
    rank: 0,
    vote: 0,
    followers: 0,
    following: 0,
    device: "",
    dataStructures: 0,
    algorithms: 0,
    cpp: 0,
    java: 0,
    js: 0,
    html: 0,
    python: 0,
  });
  useEffect(() => {
    if (editProfile) {
      setProfileData(editProfile);
    }
  }, [editId]);

  useEffect(() => {
    clear();
  }, [profiles]);

  const clear = () => {
    setProfileData({
      name: "",
      Image: "",
      location: "",
      education: "",
      challengesSolved: 0,
      solutionSubmitted: 0,
      solutionAccepted: 0,
      rank: 0,
      vote: 0,
      followers: 0,
      following: 0,
      device: "",
      dataStructures: 0,
      algorithms: 0,
      cpp: 0,
      java: 0,
      js: 0,
      html: 0,
      python: 0,
    });
    setEditId(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editProfile) {
      dispatch(action.updateProfile(editId, profileData));
    } else {
      dispatch(action.createProfile(profileData));
    }
  };

  const minNumberProps = {
    min: 0,
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {editProfile ? "Edit " : "Create Hacker Profile"}
        </Typography>
        {errors && errors?.message && (
          <Typography color="error" align="center" variant="h6">
            {errors?.message}
          </Typography>
        )}
        <div>
          <TextField
            name="name"
            required
            variant="outlined"
            label="Name"
            fullWidth
            error={errors && errors.name ? true : false}
            helperText={errors && errors.name ? errors?.name : null}
            value={profileData.name}
            onChange={(e) =>
              setProfileData({ ...profileData, name: e.target.value })
            }
          />
          <TextField
            name="title"
            required
            variant="outlined"
            label="Profile Image URL"
            fullWidth
            error={errors && errors.Image ? true : false}
            helperText={errors && errors.Image ? errors?.Image : null}
            value={profileData.Image}
            onChange={(e) =>
              setProfileData({ ...profileData, Image: e.target.value })
            }
          />
          {profileData && profileData.Image && (
            <div style={{ textAlign: "center" }}>
              <img
                src={profileData.Image}
                alt={profileData.name}
                height="100px"
                width="100px"
              />
            </div>
          )}
          <TextField
            name="location"
            required
            variant="outlined"
            label="Location"
            fullWidth
            error={errors && errors.location ? true : false}
            helperText={errors && errors.location ? errors?.location : null}
            value={profileData.location}
            onChange={(e) =>
              setProfileData({ ...profileData, location: e.target.value })
            }
          />
          <TextField
            name="education"
            required
            variant="outlined"
            label="Education"
            fullWidth
            error={errors && errors.education ? true : false}
            helperText={errors && errors.education ? errors?.education : null}
            value={profileData.education}
            onChange={(e) =>
              setProfileData({ ...profileData, education: e.target.value })
            }
          />
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="Challenges solved"
            fullWidth
            error={errors && errors.challengesSolved ? true : false}
            helperText={
              errors && errors.challengesSolved
                ? errors?.challengesSolved
                : null
            }
            value={profileData.challengesSolved}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                challengesSolved: e.target.value,
              })
            }
          />
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="Solution Submitted"
            fullWidth
            error={errors && errors.solutionSubmitted ? true : false}
            helperText={
              errors && errors.solutionSubmitted
                ? errors?.solutionSubmitted
                : null
            }
            value={profileData.solutionSubmitted}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                solutionSubmitted: e.target.value,
              })
            }
          />
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="Solutions Accepted"
            fullWidth
            error={errors && errors.solutionAccepted ? true : false}
            helperText={
              errors && errors.solutionAccepted
                ? errors?.solutionAccepted
                : null
            }
            value={profileData.solutionAccepted}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                solutionAccepted: e.target.value,
              })
            }
          />
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="Rank"
            fullWidth
            error={errors && errors.rank ? true : false}
            helperText={errors && errors.rank ? errors?.rank : null}
            value={profileData.rank}
            onChange={(e) =>
              setProfileData({ ...profileData, rank: e.target.value })
            }
          />
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="Vote"
            fullWidth
            error={errors && errors.vote ? true : false}
            helperText={errors && errors.vote ? errors?.vote : null}
            value={profileData.vote}
            onChange={(e) =>
              setProfileData({ ...profileData, vote: e.target.value })
            }
          />
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="Followers"
            fullWidth
            error={errors && errors.followers ? true : false}
            helperText={errors && errors.followers ? errors?.followers : null}
            value={profileData.followers}
            onChange={(e) =>
              setProfileData({ ...profileData, followers: e.target.value })
            }
          />
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="Following"
            fullWidth
            error={errors && errors.following ? true : false}
            helperText={errors && errors.following ? errors?.following : null}
            value={profileData.following}
            onChange={(e) =>
              setProfileData({ ...profileData, following: e.target.value })
            }
          />
          <TextField
            name="name"
            required
            variant="outlined"
            label="Device"
            fullWidth
            error={errors && errors.device ? true : false}
            helperText={errors && errors.device ? errors?.device : null}
            value={profileData.device}
            onChange={(e) =>
              setProfileData({ ...profileData, device: e.target.value })
            }
          />
          <Typography variant="h6">Competitive Percentile</Typography>
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="Data Structures"
            fullWidth
            error={errors && errors.dataStructures ? true : false}
            helperText={
              errors && errors.dataStructures ? errors?.dataStructures : null
            }
            value={profileData.dataStructures}
            onChange={(e) =>
              setProfileData({ ...profileData, dataStructures: e.target.value })
            }
          />
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="Algorithms"
            fullWidth
            error={errors && errors.algorithms ? true : false}
            helperText={errors && errors.algorithms ? errors?.algorithms : null}
            value={profileData.algorithms}
            onChange={(e) =>
              setProfileData({ ...profileData, algorithms: e.target.value })
            }
          />
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="C++"
            fullWidth
            error={errors && errors.cpp ? true : false}
            helperText={errors && errors.cpp ? errors?.cpp : null}
            value={profileData.cpp}
            onChange={(e) =>
              setProfileData({ ...profileData, cpp: e.target.value })
            }
          />
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="Java"
            fullWidth
            error={errors && errors.java ? true : false}
            helperText={errors && errors.java ? errors?.java : null}
            value={profileData.java}
            onChange={(e) =>
              setProfileData({ ...profileData, java: e.target.value })
            }
          />
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="Javascript"
            fullWidth
            error={errors && errors.js ? true : false}
            helperText={errors && errors.js ? errors?.js : null}
            value={profileData.js}
            onChange={(e) =>
              setProfileData({ ...profileData, js: e.target.value })
            }
          />
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="HTML"
            fullWidth
            error={errors && errors.html ? true : false}
            helperText={errors && errors.html ? errors?.html : null}
            value={profileData.html}
            onChange={(e) =>
              setProfileData({ ...profileData, html: e.target.value })
            }
          />
          <TextField
            name="name"
            required
            type="number"
            inputProps={minNumberProps}
            variant="outlined"
            label="Python"
            fullWidth
            error={errors && errors.python ? true : false}
            helperText={errors && errors.python ? errors?.python : null}
            value={profileData.python}
            onChange={(e) =>
              setProfileData({ ...profileData, python: e.target.value })
            }
          />
        </div>
        <div className={classes.wrapper}>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            disabled={loading}
          >
            Submit
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
          disabled={loading}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default ProfileForm;
