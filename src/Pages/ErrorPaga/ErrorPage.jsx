import React from 'react';
import error from "../../assets/error-404.png"

const ErrorPage = () => {
    return (
        <div className='text-center items-center gap-4 '>
            <img className='mx-auto my-8 pt-16' src={error} alt="" />
            <h1 className='font-bold text-3xl'>Oops, page not found!</h1>
            <p className='font-sm text-sm p-4'>The page you are looking for is not available.</p>
            <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] transition-all duration-300 cursor-pointer text-white" href="/">Go Back!</a>
        </div>
    );
};

export default ErrorPage;