import axios from "axios";

async function addBooking(e) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}/transactions/create`,
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
    const accessToken = localStorage.getItem('accessToken')
    const { data } = await axios.get(
      `${process.env.REACT_APP_REST_API}/transactions/show-all`,
      {
        accessToken
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
    const accessToken = localStorage.getItem('accessToken')
    const { data } = await axios.get(
      `${process.env.REACT_APP_REST_API}/transactions/show-all`,
      {
        accessToken
      }
    );

    if (data?.valid) {
      return data.transactionsArray;
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
      `${process.env.REACT_APP_REST_API}/transactions/search/d9d2aa5b-4a70-4a5e-b0be-1c0ee58ec0cc`,
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
      `${process.env.REACT_APP_REST_API}/events/show-all/e9ecabdb-d077-4b88-bb84-52c7403766de`,
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
