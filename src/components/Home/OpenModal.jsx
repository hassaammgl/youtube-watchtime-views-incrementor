import "./openmodal.scss";
// import { Links } from "../../Links";
import { useSelector } from "react-redux";

const OpenModal = () => {
  const modal = document.querySelector("#modal");
  const Links = useSelector((state) => state.link.value);
  return (
    <div>
      <button onClick={() => (modal.style.display = "block")}>
        Open Modal
      </button>

      <div id="modal" className="modal">
        {Links.map((i, index) => (
          <>
            <div key={index} className="modal-content">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/qiE7VKRHSsA?si=2hrjvv9_LUIGZTIt&amp;controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </>
        ))}

        <button
          onClick={() => (modal.style.display = "none")}
          className="close-button"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default OpenModal;
