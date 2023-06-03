import axios from "axios";

async function getTicketGootopia(user, businessID , branchID) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}FilterTicketViaBranch`,
      {
        UserID: user,
        BusinessUnitID: businessID,
        BranchID:branchID
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

async function getBookingsByTicketID(ticketid, date) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}ViewBookingsByTicketID`,
      {
        TicketID: ticketid,
        BookingDate: date,
      }
    );

    console.log(data, date)

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

export { getTicketGootopia,
  getBookingsByTicketID
};
