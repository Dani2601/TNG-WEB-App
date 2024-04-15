import axios from "axios";

//No API client side uploading file
async function uploadPDFFile(file, container, filename) {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_REST_API}generateSASToken`,
        {
          filename: filename,
          container: container,
        }
      );
  
      //console.log(data);
      await axios.put(data, file, {
        headers: {
          "x-ms-blob-type": "BlockBlob",
          "x-ms-blob-content-type": file.type,
        },
      });
    } catch (e) {
      console.log("Failed to upload");
    }
  }

  export {
    uploadPDFFile
  }