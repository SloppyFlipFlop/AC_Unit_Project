import React from 'react'
import pictureOfYou from './../utils/images/picture-of-you.jpg'
const AboutUs = () => {
    return (
        <div id="aboutUs">
            <h3>About Us</h3>
            <div className="underline">
                <div className="innerUnderLine"></div>
            </div>
            <div className="aboutUsInfo">
                <img src={pictureOfYou} alt="Picture of Briggs" />
                <p> Incididunt sunt tempor labore non magna ullamco sunt duis irure consectetur fugiat. Voluptate tempor quis et minim pariatur. Nulla sunt minim duis labore ea ipsum voluptate. Id elit aliqua et fugiat culpa do amet est occaecat eiusmod.Lorem deserunt laborum Lorem pariatur fugiat nostrud minim velit ex ad aliquip veniam officia. Aute veniam nostrud consectetur duis in incididunt dolor ipsum tempor elit Lorem sint sit.</p>
                <p> Duis culpa dolor dolore officia duis ullamco consequat dolor ad. Laboris culpa cupidatat veniam aliquip incididunt duis. Aute veniam nostrud consectetur duis in incididunt dolor ipsum tempor elit Lorem sint sit. Aute veniam nostrud consectetur duis in incididunt dolor ipsum tempor elit Lorem sint sit.</p>
            </div>
        </div>
    )
}

export default AboutUs
