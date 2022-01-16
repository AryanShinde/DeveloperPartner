import axios from "axios";

export const githubAction = (name) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Headers": "X-Requested-With",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${name}/repos`,
      config
    );
    console.log(data);
    dispatch({
      type: "GITHUB_REPO",
      payload: data.data.slice(0, 4),
    });
  } catch (e) {
    console.log(e);
  }
};
