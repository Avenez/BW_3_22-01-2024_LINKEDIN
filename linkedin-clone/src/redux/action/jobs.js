export const SET_JOBS = "SET_JOBS";

export const fetchJobs = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDYwOTE1MDUsImV4cCI6MTcwNzMwMTEwNX0.wH2VfmxlAU88LH_llTaiiDJwpbdcCfSgscNbK5cy1CY ",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let result = await response.json();
        dispatch({ type: SET_JOBS, payload: result });
        console.log("jobs", result);
      } else {
        throw new Error("Fetch Profilo Fallita");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
