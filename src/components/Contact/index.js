import React from 'react'
import "./index.css"

function Contact (){
    return (
    <div id="gridmargin" class="grid-container">
        <div class="row">
            <div class="col-lg-10 col-md-8 outline col-sm-12 card text-black mb-3">
                <div class="card-header aboutmefont">Contact</div>
                <div class="card-body">
                    <div class="mb-3">
                        <h3>Name</h3>
                        <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="mb-3">
                        <h3>Email</h3>
                        <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="mb-3">
                        <h3>Message</h3>
                        <textarea class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" rows="3"></textarea>
                    </div>
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact