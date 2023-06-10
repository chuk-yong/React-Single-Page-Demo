import Button from "@mui/material/Button";
import imgHome from "./Images/imgHome.png";
import "./Css/HomeAbout.css";

export const Home = () => (
  <div className="mainSection">
    <div className="contentBox">
      <h1>This is the Home Page</h1>
      <p>Lorem ipsum ... etc etc .. </p>
      <div className="justifyButton">
        <Button variant="outlined">More</Button>
      </div>
    </div>
    <div className="imageContainer">
      <img src={imgHome} alt="Presentation" />
    </div>
  </div>
);
