import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa";
import React from "react";
import { Home, Error} from "../Pages";
import Admin from "../Pages/Admin"
export const links = [
  
  {
    id: 1,
    url: "/",
    text: "Home",
    page: <Home />,
  },
  {
    id: 2,
    url: "/admin",
    text: "admin",
    page: <Admin />,
  },
  
  {
    id: 3,
    url: "*",
    text: "Error",
    page: <Error />,
  },
];

export const socials = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.behance.com",
    icon: <FaInstagram />
  },
];
