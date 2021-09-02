import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa";
import React from "react";
import { Home, AboutUs, Contact} from "../Pages";

export const links = [
  
  {
    id: 1,
    url: "#home",
    text: "Home",
    page: <Home />,
  },
  {
    id: 2,
    url: "#aboutUs",
    text: "About Us",
    page: <AboutUs />,
  },
  {
    id: 3,
    url: "#contact",
    text: "Contact",
    page: <Contact />,
  },
  // {
  //   id: 4,
  //   url: "#gallery",
  //   text: "gallery",
  //   // page: <About />,
  // }
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
    url: "https://www.instagram.com",
    icon: <FaInstagram />
  },
];
