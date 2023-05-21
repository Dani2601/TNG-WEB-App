import axios from "axios";

async function getBranches(user) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}FilterBranch`,
      {
        UserID: user,
        BusinessUnitID: "f98233d6-e9eb-4ef6-ae94-e179f954e542",
      }
    );

    if (data?.valid) {
     return data
    } else {
      return data;
    }
  } catch (e) {
    return {
      valid: false,
    };
  }
}

export { getBranches };
