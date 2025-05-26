import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
        <div className="card shadow-lg">
            <div className="card-body p-4 p-md-5">
                <h3 className="card-title text-center mb-4">Login</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="InputEmail" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="InputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="InputPassword"
                            placeholder="Password"
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="rememberCheck"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="rememberCheck"
                        >
                            Remember Me
                        </label>
                    </div>
                    <div className="d-grid">
                        <Link
                            to="/employees"
                            className="btn btn-primary btn-block"
                        >
                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
