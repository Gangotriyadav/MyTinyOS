import { useState } from "react";
import { FaImages } from "react-icons/fa";
import { MdLocalLibrary } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { SiDictionarydotcom } from "react-icons/si";
import { BsQrCode } from "react-icons/bs";
import "./style.css";

function Operating() {
  const [date, setDate] = useState(new Date());
  const formattedDate = date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const useNav = useNavigate();

  function handleImg() {
    localStorage.setItem(
      "redirectURL",
      "https://gangotriyadav.github.io/IMAGE-GALLRY/"
    );
    useNav("/SignUp");
  }

  function handleLib() {
    localStorage.setItem(
      "redirectURL",
      "https://gangotriyadav.github.io/library/"
    );
    useNav("/SignUp");
  }

  function handleDic() {
    localStorage.setItem(
      "redirectURL",
      "https://gangotriyadav.github.io/Dictionary-App/"
    );
    useNav("/SignUp");
  }

  function handleQrCode() {
    localStorage.setItem(
      "redirectURL",
      "https://gangotriyadav.github.io/GenerateQRCode/"
    );
    useNav("/SignUp");
  }

  return (
    <>
      <h2>{formattedDate}</h2>
     <input type="text" className="inpBox" />
      <div className="iconContainer">
        <div className="iconRow">
          <div className="iconBox" onClick={handleImg}>
            <FaImages size={100} className="img-icon" />
            <span>Gallery</span>
          </div>

          <div className="iconBox" onClick={handleLib}>
            <MdLocalLibrary size={100} className="lib-icon" />
            <span>Library</span>
          </div>
        </div>

        <div className="iconRow">
          <div className="iconBox" onClick={handleDic}>
            <SiDictionarydotcom size={100} className="dic-icon" />
            <span>Dictionary</span>
          </div>

          <div className="iconBox" onClick={handleQrCode}>
            <BsQrCode size={100} className="qrCode-icon" />
            <span>QR Code Generator</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Operating;
