import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Css/FooterStyle.css";

export const Footer = () => (
  <footer>
    <div className="container container-flex">
      <div className="icons">
        <FacebookIcon className="icon" />
        <LinkedInIcon className="icon" />
        <TwitterIcon className="icon" />
      </div>
      <div className="line">
        <hr />
        <hr />
      </div>
      <div className="copyright">
        <p>All rights reserved &copy;</p>
      </div>
    </div>
  </footer>
);
