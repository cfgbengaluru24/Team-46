import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "react-feather";
import { useFirebase } from '../context/Firebase';

export const Navbar = () => {
    const firebase = useFirebase();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(firebase.isLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(firebase.isLoggedIn);
    }, [firebase.isLoggedIn]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSignIn = () => {
        navigate('/login');
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    const handleLogout = () => {
        firebase.isLoggedIn = false;
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <div className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img
                                className="h-8 w-auto"
                                src="../Logo/logo.jpg"
                                alt="Indus Action"
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        {isLoggedIn ? (
                            <button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition"
                                    onClick={handleSignIn}
                                >
                                    Sign In
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition"
                                    onClick={handleSignUp}
                                >
                                    Sign Up
                                </button>
                            </>
                        )}
                    </div>
                    <div className="-mr-2 flex items-center lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden">
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="space-y-1">
                            {isLoggedIn ? (
                                <button
                                    type="button"
                                    className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                                        onClick={handleSignIn}
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        type="button"
                                        className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                                        onClick={handleSignUp}
                                    >
                                        Sign Up
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
