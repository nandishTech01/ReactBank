import React from "react";
import { Link } from "react-router-dom";

export default function () {
    return (
        <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Login</h5>
                        <form>
                            <div className="form-outline mb-4">
                                <input type="email" id="email" className="form-control form-control-lg" placeholder="Email address" />
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="password" className="form-control form-control-lg" placeholder="Password" />
                            </div>

                            <div className="row mb-4">
                                <div className="col d-flex justify-content-center">

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                                        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                    </div>
                                </div>

                                <div className="col">
                                    <Link to="/forgot">Forgot password?</Link>
                                </div>
                            </div>

                            <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

                            <div className="text-center">
                                <p>Not a member? <Link to="/signup">Register</Link></p>
                                <p>or sign up with:</p>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
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