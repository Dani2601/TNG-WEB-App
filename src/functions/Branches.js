import axios from "axios";

async function getBranches(accessToken, key) {
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_REST_API}/business-unit-branches/search/${key}`,
      { headers }
    );

    if (data?.valid) {
      return data.businessUnitBranchesArray;
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
