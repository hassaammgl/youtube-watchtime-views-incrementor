import { useState } from "react";
import OpenModal from "./OpenModal";
import { useDispatch } from "react-redux";
import { addLink } from "../features/linkSlice";

const UploadLinkForm = () => {
  const [link, setLink] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addLink(link));
  };
  return (
    <div className="upload-form-link">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setLink(e.target.value)}
          name="link"
          placeholder="Paste link here"
        />
        <button type="submit">Submit</button>
      </form>
      <OpenModal />
    </div>
  );
};

export default UploadLinkForm;
