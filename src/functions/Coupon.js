import axios from "axios";

async function verifyCouponCode(e) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}/vouchers/show-by-code/Sample code`,
      e
    );

    if (data?.valid) {
      return data;
    } else {
      return data;
    }
  } catch (e) {
    return {
      valid: false,
    };
  }
}

export { verifyCouponCode };
