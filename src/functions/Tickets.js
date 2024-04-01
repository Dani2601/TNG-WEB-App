import axios from "axios";

async function getTicketGootopia(user, businessID, branchID) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}/tickets/show-all?filter[businessUnitId]=e9ecabdb-d077-4b88-bb84-52c7403766de&filter[businessUnitBranchId]=55de1cf4-0071-474a-a054-b551af5153f3`,
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
    const { data } = await axios.get(
      `${process.env.REACT_APP_REST_API}FilterBakebeTicketViaBranchNoPackage`,
      {
        UserID: user,
        BusinessUnitID: businessID,
        BranchID: branchID,
        Type: type,
        PageSize: parseInt(pageSize),
        PageNumber: pageNumber,
        Category: category,
        Difficulty: difficulty,
        Duration: duration
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

async function getTFRBookingsByTicketID(branchID, ticketid, date, subcat) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}ViewTFRBookingsByTicketID`,
      {
        BranchID: branchID,
        TicketID: ticketid,
        BookingDate: date,
        SubCategory: subcat
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
      `${process.env.REACT_APP_REST_API}/tickets/2c311c18-9564-42a2-81cc-9cd67a48d655/search`,
      {
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

async function getBookingsByBranch(branchID, date) {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_REST_API}ViewBookingsByBranch`,
      {
        BranchID: branchID,
        BookingDate: date,
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

export {
  getBookingsByBranch,
  getTicketGootopia,
  getBookingsByTicketID,
  getTicketBakebe,
  getTFRBookingsByTicketID
};
