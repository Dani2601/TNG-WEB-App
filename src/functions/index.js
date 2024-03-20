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

    if (data?.valid) {
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

    if (data?.valid) {
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

async function changePass(id, old, newPass) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}ChangePassword`,
      {
        id: id,
        OldPassword: old,
        NewPassword: newPass,


      }
    );

    if (data?.valid) {
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

export { loginViaEmail, register, reauthenticate, editProfile, changePass };
