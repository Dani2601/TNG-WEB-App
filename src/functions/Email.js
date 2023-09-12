import axios from "axios";

function sendEmailWithAttachment(emailData) {
  try {
    const { data } = axios.post(
        `${process.env.REACT_APP_REST_API}SendEmailWithAttachment`,
        {
            Email: emailData?.Email,
            Message: emailData?.Message,
            Subject: "TNG Booking Information",
            Filename: emailData?.Filename
        }
    );

   // console.log(data)
    if (data?.valid) {
      return {
        valid: true,
      };
    } else {
      return {
        error: data,
      };
    }
  } catch (e) {
    return {
      valid: false,
    };
  }
}


export {
    sendEmailWithAttachment
};