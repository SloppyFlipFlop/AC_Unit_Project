import React from "react";
import rvimg from "../utils/images/rv-picture.jpg";

const Home = () => {
  return (
    <main id="home">
      <div className="landingPicture">
        <img src={rvimg} alt="rv image" />
        <div className="landingInfo">
          <h3>Briggs</h3>
          <p className="name">Clancy Briggs</p>
          <p className="address">24710 W Dove Trail, Buckeye, AZ 85326</p>
          <p className="number">+16234745069</p>
          <a href="#contact" className="btn" >Contact Us</a>
        </div>
      </div>
    </main>
  );
};

export default Home;
