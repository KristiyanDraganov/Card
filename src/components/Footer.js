import "../index.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <TwitterIcon className="icon" />
        <FacebookIcon className="icon" />
        <InstagramIcon className="icon" />
        <LinkedInIcon className="icon" />
      </div>
    </div>
  );
}

export default Footer;
