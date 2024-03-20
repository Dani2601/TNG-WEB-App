import axios from "axios";

async function addBooking(e) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}/transactions/b4edd511-2abe-4bfe-932e-cbbd6e45c401/create`,
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
      `${process.env.REACT_APP_REST_API}/transactions/b4edd511-2abe-4bfe-932e-cbbd6e45c401/showAll`,
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
      `${process.env.REACT_APP_REST_API}/tickets/show-all`,
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
      `${process.env.REACT_APP_REST_API}/transactions/d9d2aa5b-4a70-4a5e-b0be-1c0ee58ec0cc/search`,
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

async function ViewEvents(business) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}/events/e9ecabdb-d077-4b88-bb84-52c7403766de/show-all`,
      {
        Business: business
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

export { addBooking, viewMyTransaction, viewMyTickets, ViewTransactionViaCode, ViewEvents };
