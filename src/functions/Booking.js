import axios from "axios";

async function addBooking(e) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}AddBooking`,
      e
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

export { addBooking };
