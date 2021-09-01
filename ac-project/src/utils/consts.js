import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa";
import React from "react";
import { Home, Error} from "../Pages";
import Admin from "../Pages/Admin"

export const links = [
  
  {
    id: 1,
    url: "#home",
    text: "Home",
    page: <Home />,
  },
  {
    id: 2,
    url: "#about",
    text: "About",
    // page: <About />,
  },
  {
    id: 3,
    url: "#contact",
    text: "Contact",
    // page: <About />,
  },
  {
    id: 4,
    url: "#gallery",
    text: "gallery",
    // page: <About />,
  },
  {
    id: 5,
    url: "/admin",
    text: "Admin",
    page: <Admin />,
  },
  
  {
    id: 6,
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
