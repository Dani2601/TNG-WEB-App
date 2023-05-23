import axios from "axios";

async function getTicketGootopia(user) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}FilterTicketViaBranch`,
      {
        UserID: user,
        BusinessUnitID: "f98233d6-e9eb-4ef6-ae94-e179f954e542",
        BranchID:"f988ed92-633b-44a8-988c-95e96da1cb77"
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

export { getTicketGootopia };
