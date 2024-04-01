import axios from "axios";
import { useSelector } from "react-redux";
import { decryptData } from "../helper/DataEncryption";

async function loginViaEmail(email, password) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}/accounts/login`,
      {
        emailAddress: email,
        password: password,
      }
    );

    if (data?.valid) {
      const decrypt = await decryptData(data.response);
      // console.log(decrypt)
      return {
        valid: true,
        token: data.token,
        user: decrypt,
      };
    } else {
      return data;
    }
  } catch (e) {
    console.log(e);
    return {
      valid: false,
    };
  }
}

async function reauthenticate(refresh_token) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}/accounts/refresh-token`,

      {
        refreshToken: refresh_token,
      }
    );

    if (data) {
      return {
        valid: true,
        accessToken: data.accessToken
      };
    } else {
      return {
        valid: false
      };
    }
  } catch (e) {
    return {
      valid: false,
    };
  }
}


async function register(fname, lname, mobile, email, address, password, cpassword) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}/accounts/register`,
      {
        firstName: fname,
        lastName: lname,
        emailAddress: email,
        phone: mobile,
        homeAddress: address,
        password: password,
        confirmPassword: cpassword,
        status: "Active"
      }
    );

    if (data?.valid) {
      const decrypt = await decryptData(data.response);
      return {
        valid: true,
        token: data.token,
        user: decrypt,
      };
    } else {
      return data;
    }
  } catch (e) {
    console.log(e);
    return {
      valid: false,
    };
  }
}

async function editProfile(id, name, mobile, address) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}EditCustomer`,
      {
        id: id,
        Name: name,
        Mobile: mobile,
        Address: address,

      }
    );

    if (data) {
      return data;
    } else {
      return data;
    }
  } catch (e) {
    console.log(e);
    return {
      valid: false,
    };
  }
}

async function changePass(OldPassword, NewPassword, ConfirmPassword, token) {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_REST_API}/accounts/update-password`,
      {
        password: OldPassword,
        newPassword: NewPassword,
        confirmPassword: ConfirmPassword
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const { data } = response;

    if (data.success && data.token) {
      return {
        success: true,
        token: data.token
      };
    } else {
      return {
        success: false,
        message: "Password update failed"
      };
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return {
      success: false,
      message: "An error occurred while updating the password"
    };
  }
}
export { loginViaEmail, register, reauthenticate, editProfile, changePass };
