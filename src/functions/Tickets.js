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
  pageSize,
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
        PageSize: parseInt(pageSize),
        PageNumber: pageNumber,
        ticketCategoryId: category,
        difficulty: difficulty,
        durationHours: duration
      },
      { headers }
    );

    console.log('API Response:', data);
    if (data?.valid) {
      return data.ticketInfo;
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
      `${process.env.REACT_APP_REST_API}/tickets/${id}/search`,
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

//No API get all transaction by branch
// async function getBookingsByBranch(branchID, bookingDate) {
//   const accessToken = localStorage.getItem('accessToken');
//   try {

//     const headers = {
//       Authorization: `Bearer ${accessToken}`,
//     };

//     const { data } = await axios.get(
//       `${process.env.REACT_APP_REST_API}/transactions/${branchID}/search-branch`,
//       {
//         businessUnitBranchId: branchID,
//         bookingDate: bookingDate,
//       },
//       {
//         headers
//       }
//     );

//     if (data?.valid) {
//       return {
//         valid: true,
//         data: data?.transanctionsArray,
//       };
//     } else {
//       return data;
//     }
//   } catch (e) {
//     return {
//       valid: false,
//     };
//   }
// }

async function getBookingsByBranch(branchID, bookingDate) {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const params = {
      businessUnitBranchId: branchID,
      bookingDate: bookingDate,
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_REST_API}/transactions/${branchID}/search-branch`,
      {
        headers: headers,
        params: params,
      }
    );

    console.log('data')
    console.log(data)
    if (data?.success) {

      return {
        valid: true,
        data: data?.transactionsArray, // Corrected typo here: 'transanctionsArray' to 'transactionsArray'
      };
    } else {
      return {
        valid: false,
        message: data.message, // Assuming there's an error message in the response
      };
    }
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return {
      valid: false,
      error: error.message,
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
