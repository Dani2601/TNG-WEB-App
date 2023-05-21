import axios from "axios";
import { useSelector } from "react-redux";
import { decryptData } from "../helper/DataEncryption";

async function loginViaEmail(email, password) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}LoginValidation`,
      {
        Email: email,
        Password: password,
        UserType: "C",
      }
    );

    if (data?.valid) {
      const decrypt = await decryptData(data.response);
      console.log(decrypt)
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

async function reauthenticate(token) {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_REST_API}Reauthenticate`, {},
        {
          headers: {
            "tng-authorization": token
          }
        }
      );
  
      return data;
    } catch (e) {
      return {
        valid: false,
      };
    }
  }
  

async function register(name,mobile,email, address, password) {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_REST_API}CreateCustomer`,
      {
        Name: name,
        Email: email,
        Mobile: mobile,
        Address: address,
        Password: password,
        UserType: "C",
      }
    );

    if (data?.valid) {
        // console.log("data",data)
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

export { loginViaEmail, register,reauthenticate };
