import React from "react";
import LoginForm from "../components/loginCard";

export default function LoginPage() {
    return (
        <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="row justify-content-center w-100">
                <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
