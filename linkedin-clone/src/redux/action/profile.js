export const SET_PROFILE = "SET_PROFILE";

export const SET_EXPERIENCES = "SET_EXPERIENCES";

export const UPDATE_PROFILE_NAME = "UPDATE_PROFILE_NAME";
export const UPDATE_PROFILE_SURNAME = "UPDATE_PROFILE_SURNAME";
export const UPDATE_PROFILE_EMAIL = "UPDATE_PROFILE_EMAIL";
export const UPDATE_PROFILE_USERNAME = "UPDATE_PROFILE_USERNAME";
export const UPDATE_PROFILE_BIO = "UPDATE_PROFILE_BIO";
export const UPDATE_PROFILE_TITLE = "UPDATE_PROFILE_TITLE";
export const UPDATE_PROFILE_AREA = "UPDATE_PROFILE_AREA";
export const UPDATE_PROFILE_IMAGE = "UPDATE_PROFILE_IMAGE";

// export const setName = (name) => ({ type: SET_PROFILE, payload: name });
// export const setSurname = (Surname) => ({ type: UPDATE_PROFILE_SURNAME, payload: Surname });
// export const setEmail = (email) => ({ type: UPDATE_PROFILE_EMAIL, payload: email });
// export const setUsername = (username) => ({ type: UPDATE_PROFILE_USERNAME, payload: username });
// export const setBio = (bio) => ({ type: UPDATE_PROFILE_BIO, payload: bio });
// export const setTitle = (title) => ({ type: UPDATE_PROFILE_TITLE, payload: title });
// export const setArea = (area) => ({ type: UPDATE_PROFILE_AREA, payload: area });
// export const setImage = (image) => ({ type: UPDATE_PROFILE_IMAGE, payload: image });

export const profileFetch = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + id, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDYwOTE1MDUsImV4cCI6MTcwNzMwMTEwNX0.wH2VfmxlAU88LH_llTaiiDJwpbdcCfSgscNbK5cy1CY",
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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDYwOTE1MDUsImV4cCI6MTcwNzMwMTEwNX0.wH2VfmxlAU88LH_llTaiiDJwpbdcCfSgscNbK5cy1CY",
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

// export const updateProfile = (id, updatedProfileData) => {
//   return async (dispatch) => {
//     console.log("inizia il PUT");
//     console.log(id);
//     try {
//       let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + id, {
//         method: "PUT",
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDU5MTA4OTIsImV4cCI6MTcwNzEyMDQ5Mn0.IZoYbIHodDlNFoeqZShFFPImBDRUWCouOhcleq0eqGE",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedProfileData),
//       });
//       console.log(updatedProfileData);

//       if (response.ok) {
//         let result = await response.json();
//         console.log(result);
//         dispatch({ type: SET_PROFILE, payload: result });
//       } else {
//         throw new Error("Aggiornamento Profilo Fallito");
//       }
//     } catch (error) {
//       console.error("Error", error);
//     }
//   };
// };

export const updateProfile = (updatedProfileData) => {
  return async (dispatch) => {
    console.log("inizia il PUT");
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          {
            method: "PUT",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDU5MTA4OTIsImV4cCI6MTcwNzEyMDQ5Mn0.IZoYbIHodDlNFoeqZShFFPImBDRUWCouOhcleq0eqGE",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProfileData),
          }
      );
      console.log(updatedProfileData);

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
