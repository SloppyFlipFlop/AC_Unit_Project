import { FaFacebook, FaTwitter, FaLinkedin, FaBehance } from "react-icons/fa";
import React from "react";
import { Home, About, Products, Error, Cart } from "../Pages";
import Admin from "../Pages/Admin"
export const links = [
  {
    id: 2,
    url: "/about",
    text: "About",
    page: <About />,
  },
  {
    id: 3,
    url: "/products",
    text: "products",
    page: <Products />,
  },
  {
    id: 4,
    url: "/cart",
    text: "cart",
    page: <Cart />,
  },
  {
    id: 7,
    url: "/admin",
    text: "admin",
    page: <Admin />,
  },
  {
    id: 5,
    url: "/",
    text: "Home",
    page: <Home />,
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
    icon: <FaBehance />,
  },
];
