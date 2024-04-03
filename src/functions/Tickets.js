import axios from "axios";

async function getTicketGootopia(accessToken, businessID, branchID) {
  try {

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_REST_API}/tickets/show-all?filter[businessUnitId]=${businessID}&filter[businessUnitBranchId]=${branchID}`,
      {
        businessUnitId: businessID,
        businessUnitBranchId: branchID,
      }, { headers }
    );

    if (data?.valid) {
      return {
        valid: true,
        data: data?.ticketInfo,
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
  accessToken,
  businessID,
  branchID,
  type,
  // pageSize,
  pageNumber,
  category,
  difficulty,
  duration
) {
  try {

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_REST_API}/tickets/show-all?filter[businessUnitId]=${businessID}&filter[businessUnitBranchId]=${branchID}`,
      {
        businessUnitId: businessID,
        businessUnitBranchId: branchID,
        ticketType: type,
        // PageSize: parseInt(pageSize),
        PageNumber: pageNumber,
        ticketCategoryId: category,
        difficulty: difficulty,
        durationHours: duration
      },
      { headers }
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

async function getTFRBookingsByTicketID(id, branchID, ticketid, date, subcat) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}https://api.thenextperiencegroup.com/api/v1/tickets/${id}/search`,
      {
        businessUnitBranchId: branchID,
        id: ticketid,
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
