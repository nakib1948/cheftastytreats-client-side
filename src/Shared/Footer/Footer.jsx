import logo from "../../assets/Cooking-Logo-design-template-vector.jpg";
import CallIcon from "@material-ui/icons/Call";
import MessageIcon from "@material-ui/icons/Message";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-[#372848]  text-white">
        <div className="justify-items-center">
          <img className="h-24 rounded-full" src={logo} alt="" />
          <p>
            {" "}
            <span className="text-blue-600">Chef's Tasty Treats</span>
            <br /> Exploring Recipes since 1992
          </p>
        </div>

        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Our Service</a>
          <a className="link link-hover">Gallery</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title text-orange-500">Contact Us</span>
          <p className="text-orange-500">
            <a className="link link-hover ">
              {" "}
              <FontAwesomeIcon
                className="mb-3 mr-4"
                icon={faPhone}
                beatFade
                size="2xl"
              />{" "}
              +44 (0) 20 9994 7740{" "}
            </a>{" "}
          </p>

          <p className="text-orange-500">
            <a className="link link-hover">
              {" "}
              <FontAwesomeIcon
                className="mb-3 mr-4"
                icon={faEnvelope}
                beatFade
                size="2xl"
              />
              Tastytreats@gmail.com
            </a>
          </p>
          <p className="text-orange-500">
            {" "}
            <FontAwesomeIcon
              className="mb-3 mr-4"
              icon={faMapMarkerAlt}
              beatFade
              size="2xl"
            />
            Blackwell Street,Dry Creek,Newyork
          </p>
          <div className="w-full h-0.5 bg-gray-300 my-4"></div>
          <div>
            <FontAwesomeIcon icon={faFacebook} beat size="2xl" />
            <FontAwesomeIcon
              className="mx-4"
              icon={faTwitter}
              beat
              size="2xl"
            />
            <FontAwesomeIcon icon={faInstagram} beat size="2xl" />
          </div>
        </div>
      </footer>

      <footer className="footer footer-center p-4 text-white">
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Chef's Tasty Treats
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
