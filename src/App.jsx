import { useState } from "react";
import S3FileUpload from "react-s3";
import "./App.css";

const config = {
  bucketName: import.meta.env.VITE_BUCKET_NAME,
  region: import.meta.env.VITE_REGION,
  accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY,
};

function App() {
  const [file, setFile] = useState(null);

  const upload = () => {
    S3FileUpload.uploadFile(file, config)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button onClick={upload}>Upload</button>
    </div>
  );
}

export default App;
