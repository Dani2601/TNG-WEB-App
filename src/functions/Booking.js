import axios from "axios";

async function addBooking(e) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}AddBooking`,
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

async function viewMyTransaction(e) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}ViewMyTransactions`,
      {
        UserID: e,
      }
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

async function viewMyTickets(e) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}ViewMyTickets`,
      {
        UserID: e,
      }
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

async function ViewTransactionViaCode(Code) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}ViewTransactionByCode`,
      {
        Code: Code
      }
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

export { addBooking, viewMyTransaction, viewMyTickets, ViewTransactionViaCode };
