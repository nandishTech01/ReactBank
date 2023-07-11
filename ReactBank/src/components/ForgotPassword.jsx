import React from "react";
import { Link } from "react-router-dom";

export default function () {
    return (
        <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Forgot Password</h5>
                        <form>
                            <div className="form-outline mb-4">
                                <input type="email" id="email" className="form-control form-control-lg" placeholder="Email address" />
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="password" className="form-control form-control-lg" placeholder="Password" />
                            </div>

    

                            <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
                                                
                            </form>

                    </div>
                </div>
            </div>
        </div>
    )
}