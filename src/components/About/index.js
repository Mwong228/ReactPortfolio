import React from "react"
import "./index.css"

function About() {

    return (
        <>
            <div id="gridmargin" class="grid-container">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://i.gyazo.com/200f110e290444f6da11b5b0d63a2905.png" alt="Profile"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title">About Me</h1>
                            <p class="card-text">My name is Michael Wong, I am currently enrolling in a full-time coding bootcamp to be a full-stacked developer. One of the main projects I have developped is a VanillaJS application to simplify the task of creating reminders targeted towards seniros with ease of use functionality by limiting the amount of needed compared to a traditioanl calendar.</p>
                            <p>Visit My: <a href="https://www.linkedin.com/in/mwong228/" >LinkedIn Page</a></p>
                            <p>Visit My: <a href="https://github.com/Mwong228" > GitHub Page</a></p>
                            <p>Copy of My: <a href="https://drive.google.com/file/d/1DrV4fH_sR5ST37Ldh0ipkF5ui6lAu90N/view?usp=sharing">Resume</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About