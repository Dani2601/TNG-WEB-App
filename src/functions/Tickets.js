import axios from "axios";

async function getTicketGootopia(user, businessID, branchID) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}FilterTicketViaBranchNoPackage`,
      {
        UserID: user,
        BusinessUnitID: businessID,
        BranchID: branchID,
      }
    );

    if (data?.valid) {
      return {
        valid: true,
        data: data?.data,
        pageCount: data?.pageCount,
      };
    } else {
      return data;
    }
  } catch (e) {
    return {
      valid: false,
    };
  }
}

async function getTicketBakebe(
  user,
  businessID,
  branchID,
  type,
  pageSize,
  pageNumber,
  category,
  difficulty,
  duration
) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}FilterBakebeTicketViaBranchNoPackage`,
      {
        UserID: user,
        BusinessUnitID: businessID,
        BranchID: branchID,
        Type: type,
        PageSize: parseInt(pageSize),
        PageNumber: pageNumber,
        Category:category,
        Difficulty:difficulty,
        Duration:duration
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

async function getBookingsByTicketID(branchID, ticketid, date) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}ViewBookingsByTicketID`,
      {
        BranchID: branchID,
        TicketID: ticketid,
        BookingDate: date,
      }
    );

    console.log(data, date);

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

export { getTicketGootopia, getBookingsByTicketID, getTicketBakebe };
