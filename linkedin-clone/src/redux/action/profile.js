export const SET_PROFILE = "SET_PROFILE";

export const SET_EXPERIENCES = "SET_EXPERIENCES";

export const setProfile = (profile) => ({ type: SET_PROFILE, payload: profile });

export const profileFetch = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + id, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDU5MTA4OTIsImV4cCI6MTcwNzEyMDQ5Mn0.IZoYbIHodDlNFoeqZShFFPImBDRUWCouOhcleq0eqGE",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let result = await response.json();
        console.log(result);
        dispatch({ type: SET_PROFILE, payload: result });
      } else {
        throw new Error("Fetch Profilo Fallita");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const experiencesFetch = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDU5MTA4OTIsImV4cCI6MTcwNzEyMDQ5Mn0.IZoYbIHodDlNFoeqZShFFPImBDRUWCouOhcleq0eqGE",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let result = await response.json();
        console.log(result);
        dispatch({ type: SET_EXPERIENCES, payload: result });
      } else {
        throw new Error("Fetch EXPERIENCES Fallita");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const updateProfile = (id, updatedProfileData) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + id, {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDU5MTA4OTIsImV4cCI6MTcwNzEyMDQ5Mn0.IZoYbIHodDlNFoeqZShFFPImBDRUWCouOhcleq0eqGE",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfileData),
      });

      if (response.ok) {
        let result = await response.json();
        console.log(result);
        dispatch({ type: SET_PROFILE, payload: result });
      } else {
        throw new Error("Aggiornamento Profilo Fallito");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
};
