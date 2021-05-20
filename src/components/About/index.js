import React from "react"
import "./index.css"

function About() {

    return (
        <>
            <div id="gridmargin" class="grid-container">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://i.gyazo.com/1b0b59ada9a19a40f5c55deb51105a5c.jpg" alt="Profile"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title">About Me</h1>
                            <p class="card-text">Full Stack Developer with an Economics and Accounting background that can leverage my expertise in Data Analytics to help create robust web applications. Applied UX and Agile development in recent E-Commerce project to develop a single-page MERN application to showcase products, track sales and inventory by pulling information from database results. Adept at collaborating with teams from different departments and strong communication skills when conveying information to others. Bring experience obtained through a cross-functional organization to streamline data analysis, reporting, and auditing.</p>
                            <p>Contact me via E-mail: michael.w228@gmail.com</p>
                            <p>Visit My: <a href="https://www.linkedin.com/in/mwong228/" >LinkedIn Page</a></p>
                            <p>Visit My: <a href="https://github.com/Mwong228" > GitHub Page</a></p>
                            <p>Copy of My: <a href="https://drive.google.com/file/d/1-I1Z07UeOkC4SaaAYdaHBpdioxdZfrPe/view">Resume</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About