import React from "react";

export default function () {
    return (

        <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Sign Up</h5>
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="m-outline">
                                        <input type="text" id="signup" className="form-control form-control-lg" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <input type="text" id="login" className="form-control form-control-lg" placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="email" id="email" className="form-control form-control-lg" placeholder="Email address" />
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="password" className="form-control form-control-lg" placeholder="Password" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                Sign up
                            </button>

                            <div className="text-center">
                                <p>or sign up with:</p>
                                <button type="button" className="btn btn-link btn-floating mx-1" >
                                    <i className="fab fa-facebook-f" ></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}